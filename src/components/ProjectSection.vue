<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { PortfolioCopy } from '../i18n'

const props = defineProps<{
  copy: PortfolioCopy
}>()

type ProjectCase = NonNullable<PortfolioCopy['projectCases']>[number]

const AUTOPLAY_SPEED = 38
const AUTOPLAY_RESUME_DELAY = 1000
const DIALOG_CLOSE_DURATION = 480
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const caseTrack = ref<HTMLElement | null>(null)
const caseTrackContent = ref<HTMLElement | null>(null)
const projectDialog = ref<HTMLDialogElement | null>(null)
const selectedCase = ref<ProjectCase | null>(null)
const isDialogClosing = ref(false)
const isAutoplayEnabled = ref(false)
const isInteractionPaused = ref(false)
const isFocusWithinSection = ref(false)
const marqueeDuration = ref(1)
const technologyVisibleCounts = ref<number[]>([])
let loopDistance = 0
let dialogTrigger: HTMLElement | null = null
let ignoreDialogTriggerFocus = false
let reducedMotionQuery: MediaQueryList | null = null
let technologyResizeObserver: ResizeObserver | null = null
let resumeTimer = 0
let dialogCloseTimer = 0

function scheduleAutoplayResume() {
  if (!isAutoplayEnabled.value) return

  isInteractionPaused.value = true
  if (resumeTimer) window.clearTimeout(resumeTimer)
  resumeTimer = window.setTimeout(() => {
    isInteractionPaused.value = false
    isFocusWithinSection.value = false
    resumeTimer = 0
  }, AUTOPLAY_RESUME_DELAY)
}

function handleMotionPreferenceChange(event: MediaQueryListEvent) {
  isAutoplayEnabled.value = !event.matches
}

function handleFocusIn(event: FocusEvent) {
  const target = event.target
  if (!(target instanceof HTMLElement)) return

  if (ignoreDialogTriggerFocus && target === dialogTrigger) {
    isFocusWithinSection.value = false
    return
  }

  if (target.closest('.carousel-button')) {
    isFocusWithinSection.value = false
    return
  }

  isFocusWithinSection.value = true
}

function handleFocusOut(event: FocusEvent) {
  if (ignoreDialogTriggerFocus && event.target === dialogTrigger) {
    ignoreDialogTriggerFocus = false
  }

  const section = event.currentTarget
  isFocusWithinSection.value = section instanceof HTMLElement
    && event.relatedTarget instanceof Node
    && section.contains(event.relatedTarget)
}

function toggleAutoplay() {
  isAutoplayEnabled.value = !isAutoplayEnabled.value
}

function openProject(project: ProjectCase, event: MouseEvent) {
  if (dialogCloseTimer) {
    window.clearTimeout(dialogCloseTimer)
    dialogCloseTimer = 0
  }
  isDialogClosing.value = false
  if (event.currentTarget instanceof HTMLElement) {
    dialogTrigger = event.currentTarget
  }
  selectedCase.value = project
  nextTick(() => projectDialog.value?.showModal())
}

function closeProject() {
  const dialog = projectDialog.value
  if (!dialog?.open || isDialogClosing.value) return

  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    dialog.close()
    return
  }

  isDialogClosing.value = true
  dialogCloseTimer = window.setTimeout(() => {
    dialog.close()
    dialogCloseTimer = 0
  }, DIALOG_CLOSE_DURATION)
}

function handleDialogClick(event: MouseEvent) {
  if (event.target === projectDialog.value) closeProject()
}

function handleDialogClose() {
  if (dialogCloseTimer) {
    window.clearTimeout(dialogCloseTimer)
    dialogCloseTimer = 0
  }
  isDialogClosing.value = false
  selectedCase.value = null
  isFocusWithinSection.value = false
  ignoreDialogTriggerFocus = dialogTrigger !== null
  scheduleAutoplayResume()
}

function moveCarousel(direction: -1 | 1) {
  const track = caseTrack.value
  const content = caseTrackContent.value
  if (!track || !content) return

  const firstCard = track.querySelector<HTMLElement>('.case-card')
  if (!firstCard) return

  const gap = firstCard.parentElement
    ? Number.parseFloat(getComputedStyle(firstCard.parentElement).columnGap) || 0
    : 0
  const step = firstCard.offsetWidth + gap
  const animation = content.getAnimations()[0]
  const animationDuration = animation?.effect?.getComputedTiming().duration
  if (animation && typeof animationDuration === 'number' && animationDuration > 0) {
    const currentTime = typeof animation.currentTime === 'number' ? animation.currentTime : 0
    const stepDuration = step / AUTOPLAY_SPEED * 1000
    const nextTime = currentTime + direction * stepDuration
    animation.currentTime = ((nextTime % animationDuration) + animationDuration) % animationDuration
    scheduleAutoplayResume()
    return
  }

  let currentLeft = track.scrollLeft
  if (loopDistance && (currentLeft < 0 || currentLeft >= loopDistance)) {
    currentLeft = ((currentLeft % loopDistance) + loopDistance) % loopDistance
    track.scrollLeft = currentLeft
  }
  let nextLeft = currentLeft + direction * step

  if (loopDistance && nextLeft >= loopDistance) {
    currentLeft += loopDistance
    track.scrollLeft = currentLeft
    nextLeft -= loopDistance
  } else if (loopDistance && nextLeft < 0) {
    currentLeft += loopDistance
    track.scrollLeft = currentLeft
    nextLeft += loopDistance
  }

  track.scrollBy({
    left: nextLeft - track.scrollLeft,
    behavior: window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'instant' : 'smooth',
  })
  scheduleAutoplayResume()
}

function handleTrackScroll() {
  const track = caseTrack.value
  if (!track || !loopDistance || track.scrollLeft === 0) return

  const offset = track.scrollLeft
  const animation = caseTrackContent.value?.getAnimations()[0]
  const animationDuration = animation?.effect?.getComputedTiming().duration

  if (animation && typeof animationDuration === 'number' && animationDuration > 0) {
    const currentTime = typeof animation.currentTime === 'number' ? animation.currentTime : 0
    const nextTime = currentTime + offset / AUTOPLAY_SPEED * 1000
    animation.currentTime = ((nextTime % animationDuration) + animationDuration) % animationDuration
    track.scrollLeft = 0
    return
  }

  track.scrollLeft = ((offset % loopDistance) + loopDistance) % loopDistance
}

function updateCarouselAfterResize() {
  const track = caseTrack.value
  const firstDeck = track?.querySelector<HTMLElement>('.case-deck:not([aria-hidden="true"])')
  const cloneDeck = track?.querySelector<HTMLElement>('.case-deck[aria-hidden="true"]')
  loopDistance = firstDeck && cloneDeck ? firstDeck.getBoundingClientRect().width : 0
  marqueeDuration.value = loopDistance ? loopDistance / AUTOPLAY_SPEED : 1
  technologyResizeObserver?.disconnect()
  track?.querySelectorAll('.case-technologies').forEach((list) => {
    technologyResizeObserver?.observe(list)
  })
  updateTechnologyVisibility()
}

function updateTechnologyVisibility() {
  const lists = caseTrack.value?.querySelectorAll<HTMLElement>('.case-technologies')
  if (!lists?.length) return

  const visibleCounts: number[] = []

  lists.forEach((list) => {
    const projectIndex = Number(list.dataset.projectIndex)
    const measure = list.nextElementSibling
    if (!Number.isInteger(projectIndex) || !(measure instanceof HTMLElement)) return

    const technologyWidths = Array.from(
      measure.querySelectorAll<HTMLElement>('.case-technology-chip'),
      (chip) => chip.getBoundingClientRect().width,
    )
    const overflowIndicator = measure.querySelector<HTMLElement>('.case-more')
    if (!technologyWidths.length || !overflowIndicator) return

    const listStyle = getComputedStyle(list)
    const availableWidth = list.clientWidth
      - (Number.parseFloat(listStyle.paddingLeft) || 0)
      - (Number.parseFloat(listStyle.paddingRight) || 0)
    const gap = Number.parseFloat(listStyle.columnGap) || 0
    const maxRows = 1
    let visibleCount = technologyWidths.length

    const fitsInAvailableRows = (count: number) => {
      const remainingCount = technologyWidths.length - count
      overflowIndicator.textContent = `+${remainingCount}`
      const widths = technologyWidths.slice(0, count)
      if (remainingCount > 0) widths.push(overflowIndicator.getBoundingClientRect().width)

      let row = 1
      let rowWidth = 0
      for (const width of widths) {
        const nextWidth = rowWidth ? rowWidth + gap + width : width
        if (nextWidth > availableWidth) {
          row += 1
          rowWidth = width
          if (row > maxRows || width > availableWidth) return false
        } else {
          rowWidth = nextWidth
        }
      }

      return true
    }

    while (visibleCount > 1 && !fitsInAvailableRows(visibleCount)) {
      visibleCount -= 1
    }

    visibleCounts[projectIndex] = Math.min(
      visibleCounts[projectIndex] ?? visibleCount,
      visibleCount,
    )
  })

  const unchanged = visibleCounts.length === technologyVisibleCounts.value.length
    && visibleCounts.every((count, index) => count === technologyVisibleCounts.value[index])
  if (!unchanged) technologyVisibleCounts.value = visibleCounts
}

watch(
  () => props.copy.projectCases,
  async () => {
    await nextTick()
    updateCarouselAfterResize()
  },
)

onMounted(() => {
  reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  isAutoplayEnabled.value = !reducedMotionQuery.matches
  reducedMotionQuery.addEventListener('change', handleMotionPreferenceChange)
  window.addEventListener('resize', updateCarouselAfterResize)
  technologyResizeObserver = new ResizeObserver(updateTechnologyVisibility)
  updateCarouselAfterResize()
})

onBeforeUnmount(() => {
  if (resumeTimer) window.clearTimeout(resumeTimer)
  if (dialogCloseTimer) window.clearTimeout(dialogCloseTimer)
  reducedMotionQuery?.removeEventListener('change', handleMotionPreferenceChange)
  window.removeEventListener('resize', updateCarouselAfterResize)
  technologyResizeObserver?.disconnect()
})
</script>

<template>
  <section
    id="projects"
    class="project-section section-rule"
    aria-labelledby="projects-title"
    @focusin="handleFocusIn"
    @focusout="handleFocusOut"
  >
    <div class="section-heading">
      <div class="heading-title">
        <span class="heading-marker" aria-hidden="true"></span>
        <h2 id="projects-title">{{ copy.projectsTitle }}</h2>
      </div>
    </div>

    <template v-if="copy.projectCases?.length">
      <div class="case-toolbar">
        <div class="carousel-controls">
          <button
            type="button"
            class="carousel-button autoplay-button"
            :aria-label="isAutoplayEnabled ? copy.projectPauseAutoplayLabel : copy.projectResumeAutoplayLabel"
            :aria-pressed="isAutoplayEnabled"
            @click="toggleAutoplay"
          ><span aria-hidden="true">{{ isAutoplayEnabled ? 'Ⅱ' : '▶' }}</span></button>
          <button
            type="button"
            class="carousel-button"
            :aria-label="copy.projectPreviousLabel"
            @click="moveCarousel(-1)"
          ><span aria-hidden="true">←</span></button>
          <button
            type="button"
            class="carousel-button"
            :aria-label="copy.projectNextLabel"
            @click="moveCarousel(1)"
          ><span aria-hidden="true">→</span></button>
        </div>
      </div>

      <div
        ref="caseTrack"
        class="case-track"
        :class="{
          'is-moving': isAutoplayEnabled && !isFocusWithinSection && !selectedCase,
          'is-paused': !isAutoplayEnabled || isFocusWithinSection || isInteractionPaused || Boolean(selectedCase),
        }"
        role="region"
        :aria-label="copy.projectsTitle"
        tabindex="0"
        @scroll="handleTrackScroll"
        @pointerdown="scheduleAutoplayResume"
        @wheel="scheduleAutoplayResume"
      >
        <div
          ref="caseTrackContent"
          class="case-track-content"
          :style="{ animationDuration: `${marqueeDuration}s` }"
        >
          <div
            v-for="deckIndex in 2"
            :key="deckIndex"
            class="case-deck"
            :aria-hidden="deckIndex === 2 ? 'true' : undefined"
          >
            <button
              v-for="(project, index) in copy.projectCases"
              :key="project.title"
              type="button"
              class="case-card"
              :tabindex="deckIndex === 2 ? -1 : undefined"
              :aria-label="`${copy.projectDetailsLabel}：${project.title}`"
              @click="openProject(project, $event)"
            >
              <span class="case-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="case-category">{{ project.category }}</span>
              <span class="case-title">{{ project.title }}</span>
              <span class="case-description">{{ project.description }}</span>
              <span v-if="project.challenges[0]" class="case-summary">
                <span class="case-summary-label">{{ copy.projectChallengesLabel }}</span>
                <span class="case-summary-text">{{ project.challenges[0] }}</span>
              </span>
              <span v-if="project.responsibilities[0]" class="case-summary">
                <span class="case-summary-label">{{ copy.projectResponsibilitiesLabel }}</span>
                <span class="case-summary-text">{{ project.responsibilities[0] }}</span>
              </span>
              <span v-if="project.results[0]" class="case-summary case-summary-result">
                <span class="case-summary-label">{{ copy.projectResultsLabel }}</span>
                <span class="case-summary-text">{{ project.results[0] }}</span>
              </span>
              <span
                class="case-technologies"
                :data-project-index="index"
                :aria-label="copy.projectTechnologiesLabel"
              >
                <span
                  v-for="technology in project.technologies.slice(
                    0,
                    technologyVisibleCounts[index] ?? Math.min(4, project.technologies.length),
                  )"
                  :key="technology"
                  class="case-technology-chip"
                >
                  {{ technology }}
                </span>
                <span
                  v-if="project.technologies.length > (technologyVisibleCounts[index] ?? Math.min(4, project.technologies.length))"
                  class="case-more"
                >
                  +{{
                    project.technologies.length
                    - (technologyVisibleCounts[index] ?? Math.min(4, project.technologies.length))
                  }}
                </span>
              </span>
              <span class="case-technologies-measure" aria-hidden="true">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="case-technology-chip"
                >{{ technology }}</span>
                <span class="case-more">+0</span>
              </span>
              <span class="case-open" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref="projectDialog"
        class="project-dialog"
        :class="{ 'is-closing': isDialogClosing }"
        :aria-labelledby="selectedCase ? 'project-dialog-title' : undefined"
        @click="handleDialogClick"
        @keydown.esc.prevent="closeProject"
        @close="handleDialogClose"
      >
        <template v-if="selectedCase">
          <div class="dialog-topline">
            <span class="dialog-category">{{ selectedCase.category }}</span>
            <button
              type="button"
              class="dialog-close"
              :aria-label="copy.projectCloseLabel"
              @click="closeProject"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m4 4 8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
          <h3 id="project-dialog-title">{{ selectedCase.title }}</h3>
          <p class="dialog-description">{{ selectedCase.description }}</p>

          <section class="dialog-section">
            <h4>{{ copy.projectTechnologiesLabel }}</h4>
            <ul class="dialog-tech-list">
              <li v-for="technology in selectedCase.technologies" :key="technology">
                {{ technology }}
              </li>
            </ul>
          </section>

          <section v-if="selectedCase.challenges.length" class="dialog-section">
            <h4>{{ copy.projectChallengesLabel }}</h4>
            <ul class="dialog-bullet-list">
              <li v-for="challenge in selectedCase.challenges" :key="challenge">
                {{ challenge }}
              </li>
            </ul>
          </section>

          <section v-if="selectedCase.solutions.length" class="dialog-section">
            <h4>{{ copy.projectSolutionsLabel }}</h4>
            <ul class="dialog-bullet-list">
              <li v-for="solution in selectedCase.solutions" :key="solution">{{ solution }}</li>
            </ul>
          </section>

          <section class="dialog-section">
            <h4>{{ copy.projectResponsibilitiesLabel }}</h4>
            <ul class="dialog-bullet-list">
              <li v-for="responsibility in selectedCase.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </section>

          <section v-if="selectedCase.results.length" class="dialog-section">
            <h4>{{ copy.projectResultsLabel }}</h4>
            <ul class="dialog-bullet-list dialog-results">
              <li v-for="result in selectedCase.results" :key="result">{{ result }}</li>
            </ul>
          </section>
        </template>
      </dialog>
    </template>

    <div v-else class="project-grid">
      <article
        v-for="(project, index) in copy.projects"
        :key="project.title"
        class="project-card"
      >
        <div class="project-visual" :class="`project-visual-${index + 1}`" aria-hidden="true">
          <div class="visual-window">
            <div class="visual-window-top"><i></i><i></i><i></i></div>
            <template v-if="index === 0">
              <div class="dashboard-layout">
                <span></span><span></span><span></span>
                <i></i><i></i><i></i>
              </div>
            </template>
            <template v-else-if="index === 1">
              <div class="rail-graphic"><span></span><i></i><b></b></div>
            </template>
            <template v-else>
              <div class="order-layout"><i></i><i></i><i></i><b></b></div>
            </template>
          </div>
          <span class="visual-caption">0{{ index + 1 }} / {{ project.category }}</span>
        </div>
        <div class="project-body">
          <p class="project-category"><span aria-hidden="true"></span>{{ project.category }}</p>
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <p class="project-role"><span>{{ copy.projectRoleLabel }}</span>{{ project.role }}</p>
          <ul class="project-names" :aria-label="copy.projectNamesLabel">
            <li v-for="name in project.names" :key="name">{{ name }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-section {
  padding-block: 34px 46px;
}

.section-rule {
  border-top: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 18px;
}

.case-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 36px;
  margin: 0 0 12px;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 7px;
}

.carousel-button,
.dialog-close {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition:
    border-color 180ms var(--ease-out),
    color 180ms var(--ease-out),
    background-color 180ms var(--ease-out),
    transform 180ms var(--ease-out);
}

.carousel-button:hover:not(:disabled),
.dialog-close:hover {
  transform: scale(1.05);
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, var(--surface));
  color: var(--accent);
}

.carousel-button:disabled {
  cursor: default;
  opacity: 0.38;
}

.case-track {
  display: block;
  overflow-x: hidden;
  padding: 8px 2px 18px;
  overscroll-behavior-inline: contain;
  scroll-behavior: auto;
  scroll-snap-type: none;
  scrollbar-color: var(--line) transparent;
  scrollbar-width: thin;
}

.case-track.is-moving {
  overflow-x: hidden;
}

.case-track-content {
  display: flex;
  width: max-content;
  animation: project-marquee 1s linear infinite;
  animation-play-state: running;
  will-change: transform;
}

.case-track.is-paused .case-track-content {
  animation-play-state: paused;
}

@keyframes project-marquee {
  to {
    transform: translateX(-50%);
  }
}

.case-deck {
  display: flex;
  align-items: stretch;
  flex: 0 0 auto;
  gap: 14px;
  padding-right: 14px;
}

.case-card {
  position: relative;
  display: flex;
  min-width: 0;
  flex: 0 0 clamp(230px, 22vw, 280px);
  min-height: 320px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding: 22px 20px 19px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--case-tint, #3e8c87) 15%, transparent), transparent 49%),
    var(--surface);
  color: var(--text);
  cursor: pointer;
  isolation: isolate;
  scroll-snap-align: start;
  text-align: left;
  transition:
    transform 240ms var(--ease-out),
    border-color 240ms var(--ease-out),
    box-shadow 240ms var(--ease-out),
    background-color 240ms var(--ease-out);
}

.case-card:nth-child(3n + 2) {
  --case-tint: #4a9ac4;
}

.case-card:nth-child(3n) {
  --case-tint: #59b59b;
}

.case-card::before {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 20px;
  left: 20px;
  height: 1px;
  transform: scaleX(0.25);
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), transparent);
  content: '';
  opacity: 0.7;
  transition: transform 320ms var(--ease-out);
}

.case-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  box-shadow: 0 16px 36px rgb(0 0 0 / 18%);
}

.case-card:hover::before {
  transform: scaleX(1);
}

.case-index {
  color: var(--accent);
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.case-category {
  margin-top: 21px;
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1.4;
}

.case-title {
  display: -webkit-box;
  overflow: hidden;
  margin-top: 6px;
  font-size: 1.05rem;
  font-weight: 650;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.case-description {
  display: -webkit-box;
  overflow: hidden;
  margin-top: 9px;
  color: var(--muted);
  font-size: 0.75rem;
  line-height: 1.7;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.case-summary {
  display: grid;
  gap: 4px;
  width: 100%;
  margin-top: 12px;
}

.case-summary-label {
  color: var(--accent);
  font-size: 0.59rem;
  font-weight: 650;
  letter-spacing: 0.04em;
}

.case-summary-text {
  display: -webkit-box;
  overflow: hidden;
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1.55;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.case-summary-result .case-summary-text {
  color: var(--text);
}

.case-technologies {
  position: relative;
  display: flex;
  min-width: 0;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: 14px;
}

.case-technologies-measure {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: max-content;
  flex-wrap: nowrap;
  gap: 5px;
  visibility: hidden;
  pointer-events: none;
}

.case-technology-chip {
  flex: 0 0 auto;
  white-space: nowrap;
}

.case-technologies span,
.case-technologies-measure span,
.dialog-tech-list li {
  padding: 4px 7px;
  border: 1px solid color-mix(in srgb, var(--line) 86%, transparent);
  border-radius: 6px;
  background: color-mix(in srgb, var(--surface-raised) 72%, transparent);
  color: var(--text);
  font-size: 0.62rem;
  line-height: 1.35;
}

.case-technologies .case-more,
.case-technologies-measure .case-more {
  color: var(--accent);
}

.case-open {
  position: absolute;
  right: 18px;
  top: 18px;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--muted);
  font-size: 0.85rem;
  transition:
    transform 220ms var(--ease-out),
    border-color 220ms var(--ease-out),
    color 220ms var(--ease-out);
}

.case-card:hover .case-open {
  transform: translate(2px, -2px);
  border-color: var(--accent);
  color: var(--accent);
}

.case-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.project-dialog {
  width: min(720px, calc(100vw - 32px));
  max-width: none;
  max-height: min(82vh, 820px);
  overflow: auto;
  padding: clamp(22px, 4vw, 36px);
  border: 1px solid var(--line);
  border-radius: 20px;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 48%),
    var(--surface);
  color: var(--text);
  box-shadow: 0 28px 90px rgb(0 0 0 / 42%);
  scrollbar-color: var(--line) transparent;
}

.project-dialog[open] {
  transform-origin: center;
  backface-visibility: hidden;
  animation: dialog-enter 620ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.project-dialog[open].is-closing {
  animation: dialog-exit 480ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

.project-dialog::backdrop {
  background: rgb(3 9 14 / 72%);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  animation: backdrop-enter 620ms ease-out both;
}

.project-dialog.is-closing::backdrop {
  animation: backdrop-exit 480ms ease-in both;
}

.dialog-topline {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.dialog-category {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.dialog-close {
  position: absolute;
  top: -18px;
  right: -18px;
  display: grid;
  width: 34px;
  height: 34px;
  padding: 0;
  place-items: center;
  transition:
    transform 220ms var(--ease-out),
    border-color 220ms var(--ease-out),
    background-color 220ms var(--ease-out),
    color 220ms var(--ease-out);
}

.dialog-close svg {
  display: block;
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 1.8;
}

.dialog-close:hover {
  transform: rotate(90deg) scale(1.06);
}

.project-dialog h3 {
  margin: 20px 0 0;
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.35;
}

.dialog-description {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.85;
}

.dialog-section {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid color-mix(in srgb, var(--line) 78%, transparent);
}

.dialog-section h4 {
  margin: 0;
  color: var(--text);
  font-size: 0.82rem;
  font-weight: 650;
}

.dialog-tech-list,
.dialog-bullet-list {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.dialog-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.dialog-tech-list li {
  padding: 6px 9px;
  font-size: 0.72rem;
}

.dialog-bullet-list {
  display: grid;
  gap: 10px;
}

.dialog-bullet-list li {
  position: relative;
  padding-left: 17px;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.8;
}

.dialog-bullet-list li::before {
  position: absolute;
  top: 0.73em;
  left: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}

.dialog-results li {
  color: var(--text);
}

@keyframes dialog-enter {
  from {
    transform: perspective(1400px) rotateY(-28deg) rotateX(9deg) rotateZ(-1.5deg) translateY(24px) scale(0.82);
    filter: blur(8px);
    opacity: 0;
  }

  to {
    transform: perspective(1400px) rotateY(0) rotateX(0) rotateZ(0) translateY(0) scale(1);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes dialog-exit {
  to {
    transform: perspective(1400px) rotateY(24deg) rotateX(-7deg) rotateZ(1deg) translateY(18px) scale(0.84);
    filter: blur(7px);
    opacity: 0;
  }
}

@keyframes backdrop-enter {
  from {
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
    opacity: 0;
  }

  to {
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    opacity: 1;
  }
}

@keyframes backdrop-exit {
  to {
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
    opacity: 0;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.project-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  cursor: pointer;
  transition:
    border-color 220ms var(--ease-out),
    transform 220ms var(--ease-out),
    box-shadow 220ms var(--ease-out);
}

.project-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 35%, var(--line));
  box-shadow: 0 12px 32px rgb(0 0 0 / 12%);
}

.project-visual {
  position: relative;
  display: grid;
  min-height: 138px;
  overflow: hidden;
  place-items: center;
  background:
    radial-gradient(ellipse at 75% 15%, rgb(71 162 188 / 24%), transparent 48%),
    linear-gradient(145deg, #173249, #0b1c2b 75%);
}

.project-visual-2 {
  background:
    radial-gradient(ellipse at 75% 20%, rgb(42 114 155 / 38%), transparent 48%),
    linear-gradient(145deg, #1d4560, #0a1a29 75%);
}

.project-visual-3 {
  background:
    radial-gradient(ellipse at 75% 20%, rgb(69 136 120 / 25%), transparent 48%),
    linear-gradient(145deg, #173d3a, #0a1c24 75%);
}

.visual-window {
  position: relative;
  width: min(76%, 310px);
  height: 94px;
  overflow: hidden;
  border: 1px solid rgb(190 223 236 / 24%);
  border-radius: 7px;
  background: rgb(7 20 33 / 68%);
  box-shadow: 0 14px 36px rgb(0 0 0 / 22%);
  transform: perspective(520px) rotateY(-7deg) rotateX(2deg);
}

.visual-window-top {
  display: flex;
  height: 16px;
  align-items: center;
  gap: 4px;
  padding-inline: 8px;
  border-bottom: 1px solid rgb(190 223 236 / 15%);
}

.visual-window-top i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #61dfc1;
  opacity: 0.8;
}

.visual-window-top i:nth-child(2) {
  opacity: 0.5;
}

.visual-window-top i:nth-child(3) {
  opacity: 0.3;
}

.dashboard-layout {
  display: grid;
  height: 74px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 12px 1fr;
  gap: 5px;
  padding: 8px;
}

.dashboard-layout span {
  border-radius: 2px;
  background: rgb(126 172 193 / 16%);
}

.dashboard-layout i {
  position: relative;
  align-self: end;
  height: 30px;
  border-bottom: 1px solid #54d6b7;
  background: linear-gradient(165deg, transparent 48%, rgb(81 221 189 / 26%) 49%, transparent 52%);
}

.dashboard-layout i:nth-of-type(2) {
  height: 38px;
  border-color: #51aee0;
}

.dashboard-layout i:nth-of-type(3) {
  height: 25px;
  border-color: #9ab9d1;
}

.rail-graphic {
  position: relative;
  height: 77px;
  margin: 0 18px;
}

.rail-graphic::before,
.rail-graphic::after {
  position: absolute;
  right: -20px;
  bottom: 17px;
  left: -20px;
  height: 1px;
  background: rgb(139 197 218 / 52%);
  content: '';
}

.rail-graphic::after {
  bottom: 10px;
  opacity: 0.55;
}

.rail-graphic span {
  position: absolute;
  right: 12%;
  bottom: 18px;
  left: 16%;
  height: 28px;
  border: 1px solid #b7d2de;
  border-radius: 18px 28px 5px 5px;
  background: linear-gradient(160deg, #d6e5ea 0 8%, #28708b 9% 62%, #18394b 63%);
  clip-path: polygon(0 45%, 18% 0, 82% 0, 100% 42%, 100% 100%, 0 100%);
}

.rail-graphic i,
.rail-graphic b {
  position: absolute;
  bottom: 10px;
  left: 32%;
  width: 1px;
  height: 45px;
  background: rgb(166 211 228 / 55%);
  transform: rotate(20deg);
}

.rail-graphic b {
  left: 70%;
  height: 51px;
  transform: rotate(-15deg);
}

.order-layout {
  display: grid;
  grid-template-columns: 1fr 0.55fr;
  gap: 5px;
  padding: 9px;
}

.order-layout i,
.order-layout b {
  height: 9px;
  border-radius: 2px;
  background: rgb(159 191 204 / 25%);
}

.order-layout i {
  grid-column: 1;
}

.order-layout i:nth-child(2) {
  width: 85%;
}

.order-layout i:nth-child(3) {
  width: 68%;
}

.order-layout b {
  height: 37px;
  grid-column: 2;
  grid-row: 1 / span 3;
  background: linear-gradient(180deg, rgb(81 221 189 / 45%), rgb(81 221 189 / 7%));
}

.visual-caption {
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: rgb(224 239 245 / 55%);
  font-family: var(--mono);
  font-size: 0.48rem;
  letter-spacing: 0.08em;
}

.project-body {
  padding: 14px 15px 16px;
}

.project-category {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 0 7px;
  color: var(--accent);
  font-size: 0.65rem;
  font-weight: 600;
}

.project-category span {
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background: var(--accent);
}

.project-body h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.45;
}

.project-description,
.project-role {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.7;
}

.project-role span {
  margin-right: 5px;
  color: var(--text);
  font-weight: 600;
}

.project-names {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.project-names li {
  padding: 4px 7px;
  border: 1px solid color-mix(in srgb, var(--line) 82%, transparent);
  border-radius: 6px;
  color: var(--text);
  background: color-mix(in srgb, var(--surface-raised) 55%, transparent);
  font-size: 0.62rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

@media (max-width: 780px) {
  .case-track {
    gap: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .case-track.is-moving {
    overflow-x: auto;
  }

  .case-track-content {
    animation: none;
    transform: none;
    will-change: auto;
  }

  .case-deck[aria-hidden='true'] {
    display: none;
  }

  .case-toolbar {
    display: none;
  }

  .case-deck {
    gap: 12px;
    padding-right: 12px;
  }

  .case-card {
    flex-basis: 42vw;
    scroll-snap-align: start;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .project-section {
    padding-block: 28px 34px;
  }

  .section-heading {
    margin-bottom: 14px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .case-track {
    margin-right: -20px;
    padding-right: 20px;
  }

  .case-deck {
    gap: 12px;
    padding-right: 12px;
  }

  .case-card {
    flex-basis: min(320px, calc(100vw - 64px));
    min-height: 300px;
    padding: 19px 17px 17px;
  }

  .project-dialog {
    max-height: 88vh;
    padding: 22px 18px;
    border-radius: 16px;
  }

  .project-visual {
    min-height: 150px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .case-card,
  .case-card::before,
  .carousel-button,
  .dialog-close {
    transition: none;
  }

  .case-track {
    scroll-behavior: auto;
  }

  .project-dialog[open],
  .project-dialog[open].is-closing,
  .project-dialog::backdrop {
    animation: none;
  }
}
</style>
