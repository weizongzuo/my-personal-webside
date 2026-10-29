<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import type { Locale, PortfolioCopy } from '../i18n'

const props = defineProps<{
  theme: 'dark' | 'light'
  locale: Locale
  copy: PortfolioCopy
}>()

const emit = defineEmits<{
  toggleTheme: []
  changeLocale: [locale: Locale]
}>()

const activeSection = ref('home')
const sectionIds = ['home', 'expertise', 'experience', 'projects', 'contact']
const navTrack = ref<HTMLElement | null>(null)
const navIndicator = ref<HTMLElement | null>(null)
let navResizeObserver: ResizeObserver | undefined
let indicatorAnimation: Animation | undefined
let scrollSpyLocked = false

const scrollKeys = new Set([
  'ArrowDown',
  'ArrowUp',
  'PageDown',
  'PageUp',
  'Home',
  'End',
  ' ',
])

function handleNavigationClick(event: MouseEvent, sectionId: string) {
  event.preventDefault()
  activeSection.value = sectionId
  scrollSpyLocked = true

  const section = document.getElementById(sectionId)
  if (!section) return

  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
  const targetTop = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight

  if (window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, '', `#${sectionId}`)
  }

  window.scrollTo({
    top: Math.max(0, Math.min(targetTop, maxScroll)),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth',
  })
}

function indicatorTransform(x: number, width: number) {
  return `translateX(${x}px) scaleX(${width})`
}

function updateIndicator(shouldAnimate = true) {
  const track = navTrack.value
  const indicator = navIndicator.value
  const activeLink = track?.querySelector<HTMLElement>(
    `.header-link[data-section="${activeSection.value}"]`,
  )

  if (!track || !indicator || !activeLink) return

  const targetX = activeLink.offsetLeft
  const targetWidth = activeLink.offsetWidth
  const targetTransform = indicatorTransform(targetX, targetWidth)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!shouldAnimate || reduceMotion) {
    indicatorAnimation?.cancel()
    indicatorAnimation = undefined
    indicator.style.transform = targetTransform
    indicator.style.opacity = '1'
    return
  }

  const currentTransform = getComputedStyle(indicator).transform
  const currentMatrix = new DOMMatrixReadOnly(
    currentTransform === 'none' ? 'matrix(0, 0, 0, 1, 0, 0)' : currentTransform,
  )
  const currentX = currentMatrix.m41
  const currentWidth = Math.max(1, currentMatrix.m11)

  indicatorAnimation?.cancel()
  indicatorAnimation = undefined
  indicator.style.transform = indicatorTransform(currentX, currentWidth)
  indicator.style.opacity = '1'

  const moveRight = targetX >= currentX
  const stretchX = moveRight ? currentX : targetX
  const stretchWidth = moveRight
    ? targetX + targetWidth - currentX
    : currentX + currentWidth - targetX

  const animation = indicator.animate(
    [
      { transform: indicator.style.transform, offset: 0 },
      {
        transform: indicatorTransform(stretchX, Math.max(stretchWidth, currentWidth)),
        offset: 0.45,
      },
      { transform: targetTransform, offset: 1 },
    ],
    {
      duration: 300,
      easing: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
      fill: 'forwards',
    },
  )
  indicatorAnimation = animation

  void animation.finished.then(() => {
    if (indicatorAnimation !== animation) return
    indicator.style.transform = targetTransform
    animation.cancel()
    indicatorAnimation = undefined
  }).catch(() => {
    // A replacement animation takes over when the active target changes.
  })
}

function updateActiveSection() {
  if (scrollSpyLocked) return

  const isAtPageEnd =
    Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2
  if (isAtPageEnd) {
    activeSection.value = 'contact'
    return
  }

  if (window.scrollY < 2) {
    activeSection.value = 'home'
    return
  }

  const activationLine = window.innerHeight * 0.3
  let currentSection = 'home'

  for (const sectionId of sectionIds) {
    const section = document.getElementById(sectionId)
    if (section && section.getBoundingClientRect().top <= activationLine) {
      currentSection = sectionId
    }
  }

  activeSection.value = currentSection
}

function resumeScrollSpy() {
  if (!scrollSpyLocked) return
  scrollSpyLocked = false
  updateActiveSection()
}

function handleKeydown(event: KeyboardEvent) {
  if (scrollKeys.has(event.key)) resumeScrollSpy()
}

function handleScrollbarPointer(event: PointerEvent) {
  if (event.clientX >= document.documentElement.clientWidth) resumeScrollSpy()
}

function handleScroll() {
  if (!scrollSpyLocked) updateActiveSection()
}

onMounted(() => {
  nextTick(() => {
    updateIndicator(false)
    if (navTrack.value) {
      navResizeObserver = new ResizeObserver(() => updateIndicator())
      navResizeObserver.observe(navTrack.value)
      navTrack.value.querySelectorAll('.header-link').forEach((link) => {
        navResizeObserver?.observe(link)
      })
    }
    window.addEventListener('resize', handleNavResize, { passive: true })
  })

  const hashSection = window.location.hash.slice(1)
  if (sectionIds.includes(hashSection)) {
    activeSection.value = hashSection
  } else {
    updateActiveSection()
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('hashchange', updateActiveSection)
  window.addEventListener('wheel', resumeScrollSpy, { passive: true })
  window.addEventListener('touchstart', resumeScrollSpy, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('pointerdown', handleScrollbarPointer, { passive: true })
})

onBeforeUnmount(() => {
  navResizeObserver?.disconnect()
  indicatorAnimation?.cancel()
  window.removeEventListener('resize', handleNavResize)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('hashchange', updateActiveSection)
  window.removeEventListener('wheel', resumeScrollSpy)
  window.removeEventListener('touchstart', resumeScrollSpy)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('pointerdown', handleScrollbarPointer)
})

function handleNavResize() {
  updateIndicator()
}

watch(
  [activeSection, () => props.locale],
  async () => {
    await nextTick()
    updateIndicator()
  },
)
</script>

<template>
  <header class="site-header">
    <a class="wordmark" href="#home" :aria-label="copy.homeLabel">
      <span class="wordmark-copy">
        <span class="wordmark-name">{{ copy.heroTitleFirst }}</span>
        <span class="wordmark-role">FRONTEND ENGINEER</span>
      </span>
    </a>

    <nav class="primary-nav" :aria-label="copy.navigationLabel">
      <div ref="navTrack" class="nav-track">
        <a
          class="header-link"
          data-section="home"
          href="#home"
          @click="handleNavigationClick($event, 'home')"
          :class="{ 'is-active': activeSection === 'home' }"
          :aria-current="activeSection === 'home' ? 'location' : undefined"
        >{{ copy.homeLabel }}</a>
        <a
          class="header-link"
          data-section="expertise"
          href="#expertise"
          @click="handleNavigationClick($event, 'expertise')"
          :class="{ 'is-active': activeSection === 'expertise' }"
          :aria-current="activeSection === 'expertise' ? 'location' : undefined"
        >{{ copy.focusNav }}</a>
        <a
          class="header-link"
          data-section="experience"
          href="#experience"
          @click="handleNavigationClick($event, 'experience')"
          :class="{ 'is-active': activeSection === 'experience' }"
          :aria-current="activeSection === 'experience' ? 'location' : undefined"
        >{{ copy.experienceNav }}</a>
        <a
          class="header-link"
          data-section="projects"
          href="#projects"
          @click="handleNavigationClick($event, 'projects')"
          :class="{ 'is-active': activeSection === 'projects' }"
          :aria-current="activeSection === 'projects' ? 'location' : undefined"
        >{{ copy.projectsNav }}</a>
        <a
          class="header-link"
          data-section="contact"
          href="#contact"
          @click="handleNavigationClick($event, 'contact')"
          :class="{ 'is-active': activeSection === 'contact' }"
          :aria-current="activeSection === 'contact' ? 'location' : undefined"
        >{{ copy.contactNav }}</a>
        <span ref="navIndicator" class="nav-indicator" aria-hidden="true"></span>
      </div>
    </nav>

    <div class="header-controls">
      <a
        class="github-link"
        href="https://github.com/weizongzuo"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="copy.githubLabel"
        :title="copy.githubLabel"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.61 1.21 3.25.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.62 5.23-5.11 5.5.4.35.76 1.03.76 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
          />
        </svg>
      </a>
      <LanguageSwitcher
        :locale="locale"
        :label="copy.languageLabel"
        @change="emit('changeLocale', $event)"
      />
      <button
        class="theme-toggle"
        type="button"
        :aria-label="theme === 'dark' ? copy.themeToLight : copy.themeToDark"
        @click="$emit('toggleTheme')"
      >
        <span class="theme-icon" aria-hidden="true">{{ theme === 'dark' ? '☼' : '☾' }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  display: flex;
  width: 100vw;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-left: calc(50% - 50vw);
  padding-inline: max(32px, calc((100vw - 1240px) / 2));
  background: color-mix(in srgb, var(--page) 92%, transparent);
  backdrop-filter: saturate(160%) blur(20px);
  -webkit-backdrop-filter: saturate(160%) blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 65%, transparent);
}

.wordmark,
.primary-nav,
.header-controls,
.theme-toggle {
  display: flex;
  align-items: center;
}

.wordmark {
  flex: 0 0 auto;
  color: var(--text);
  text-decoration: none;
}

.wordmark-copy {
  display: flex;
  align-items: baseline;
  gap: 9px;
}

.wordmark-name {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.045em;
  line-height: 1.2;
}

.wordmark-role {
  color: var(--muted);
  font-size: 0.56rem;
  font-weight: 500;
  letter-spacing: 0.09em;
  line-height: 1.2;
  white-space: nowrap;
}

.primary-nav {
  min-width: 0;
  justify-content: center;
  overflow: visible;
  color: var(--muted);
  font-size: 0.76rem;
}

.nav-track {
  position: relative;
  display: flex;
  width: max-content;
  align-items: center;
  gap: clamp(14px, 2.4vw, 32px);
}

.header-link {
  position: relative;
  padding-block: 8px;
  color: var(--muted);
  text-decoration: none;
  transition: color 200ms var(--ease-out);
}

.header-link:hover,
.header-link.is-active {
  color: var(--accent);
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 2px;
  transform: translateX(0) scaleX(0);
  transform-origin: left center;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 6px 14px -8px color-mix(in srgb, var(--accent) 72%, transparent);
  opacity: 0;
  pointer-events: none;
  will-change: transform;
}

.header-controls {
  flex: 0 0 auto;
  gap: 10px;
}

.github-link {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text);
  transition: border-color 160ms ease, color 160ms ease;
}

.github-link svg {
  width: 20px;
  height: 20px;
}

.github-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-size: 1rem;
  transition: border-color 160ms ease, color 160ms ease;
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 760px) {
  .site-header {
    min-height: 68px;
    flex-wrap: wrap;
    gap: 0 14px;
    padding: 10px 20px;
  }

  .wordmark {
    margin-right: auto;
  }

  .wordmark-copy {
    display: grid;
    gap: 2px;
  }

  .wordmark-name {
    font-size: 0.68rem;
  }

  .wordmark-role {
    font-size: 0.5rem;
    letter-spacing: 0.06em;
  }

  .primary-nav {
    order: 1;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    padding-top: 8px;
    font-size: 0.69rem;
    scrollbar-width: none;
  }

  .primary-nav::-webkit-scrollbar {
    display: none;
  }

  .header-link {
    flex: 0 0 auto;
    padding-block: 5px;
    white-space: nowrap;
  }

  .nav-track {
    gap: 10px;
  }

  .header-controls {
    margin-left: auto;
    gap: 4px;
  }
}

@media (max-width: 370px) {
  .wordmark-name {
    font-size: 0.62rem;
  }

  .wordmark-role {
    font-size: 0.44rem;
    letter-spacing: 0.045em;
  }

  .header-controls {
    gap: 3px;
  }

  .wordmark-copy {
    gap: 5px;
  }

  :deep(.language-option) {
    min-width: 26px;
    padding-inline: 3px;
    font-size: 0.58rem;
  }

  :deep(.language-switcher) {
    gap: 1px;
    padding: 2px;
  }

  .nav-track {
    gap: 6px;
  }

  .primary-nav {
    font-size: 0.63rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .header-link {
    transition: none;
  }
}
</style>
