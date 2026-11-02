<script setup lang="ts">
import { computed } from 'vue'
import type { PortfolioCopy } from '../i18n'

const props = defineProps<{
  copy: PortfolioCopy
}>()

const emit = defineEmits<{
  openProject: [projectTitle: string, trigger: HTMLElement]
}>()

const experiences = computed(() => [...props.copy.workHistory].reverse())

function openProject(event: MouseEvent, projectTitle: string) {
  if (event.currentTarget instanceof HTMLElement) {
    emit('openProject', projectTitle, event.currentTarget)
  }
}
</script>

<template>
  <section id="experience" class="experience-section section-rule" aria-labelledby="experience-title">
    <div class="section-heading">
      <div class="heading-title">
        <span class="heading-marker" aria-hidden="true"></span>
        <h2 id="experience-title">{{ copy.experienceTitle }}</h2>
      </div>
    </div>

    <ol class="experience-list">
      <li
        v-for="(experience, experienceIndex) in experiences"
        :key="experience.company"
        class="experience-row"
      >
        <time class="experience-period">{{ experience.period }}</time>
        <span class="timeline-node" aria-hidden="true"></span>
        <div class="experience-company">
          <h3>{{ experience.company }}</h3>
          <p>{{ experience.summary }}</p>
        </div>
        <div class="experience-projects">
          <span class="field-label">{{ copy.experienceProjectsLabel }}</span>
          <ul>
            <li
              v-for="(project, projectIndex) in experience.projects"
              :key="project"
              class="experience-project-item"
            >
              <button
                v-if="copy.experienceProjectDetails[project]"
                type="button"
                class="experience-project-link"
                :aria-label="`${project}: ${copy.experienceProjectDetailsTooltip}`"
                :aria-describedby="`experience-project-tooltip-${experienceIndex}-${projectIndex}`"
                @click="openProject($event, copy.experienceProjectDetails[project])"
              >
                {{ project }}
              </button>
              <span v-else class="experience-project-static">{{ project }}</span>
              <span
                :id="`experience-project-tooltip-${experienceIndex}-${projectIndex}`"
                class="experience-project-tooltip"
                role="tooltip"
              >
                {{
                  copy.experienceProjectDetails[project]
                    ? copy.experienceProjectDetailsTooltip
                    : copy.experienceProjectNoDetailsTooltip
                }}
              </span>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience-section {
  padding-block: 34px 42px;
}

.section-rule {
  border-top: 1px solid var(--line);
}

.experience-list {
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.experience-row {
  display: grid;
  min-width: 0;
  grid-template-columns: 132px 24px minmax(200px, 1fr) minmax(230px, 1.15fr);
  align-items: start;
  gap: 12px;
  padding: 12px 0;
}

.experience-period {
  padding-top: 2px;
  color: var(--muted);
  cursor: default;
  font-family: var(--mono);
  font-size: 0.7rem;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  white-space: nowrap;
}

.timeline-node {
  z-index: 1;
  width: 9px;
  height: 9px;
  margin: 4px auto 0;
  border: 2px solid var(--page);
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}

.experience-company,
.experience-projects {
  min-width: 0;
}

.experience-company h3 {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.experience-company p,
.experience-projects {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.65;
}

.experience-company .experience-note {
  color: var(--muted);
  font-size: 0.65rem;
}

.field-label {
  display: none;
}

.experience-projects ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.experience-project-item {
  position: relative;
}

.experience-project-link,
.experience-project-static {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  line-height: inherit;
  text-align: left;
}

.experience-project-link {
  cursor: pointer;
  color: #51ddbd;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}

.experience-project-link:hover,
.experience-project-link:focus-visible {
  text-decoration-color: currentColor;
}

.experience-project-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 2px;
}

.experience-project-tooltip {
  position: absolute;
  z-index: 4;
  bottom: calc(100% + 7px);
  left: 0;
  width: max-content;
  max-width: min(240px, calc(100vw - 48px));
  padding: 6px 9px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--surface-raised);
  color: var(--text);
  font-size: 0.62rem;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transform: translateY(3px);
  transition: opacity 140ms ease, transform 140ms ease, visibility 140ms ease;
  visibility: hidden;
}

@media (hover: hover) and (pointer: fine) {
  .experience-project-item:hover .experience-project-tooltip {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}

.experience-projects li {
  overflow-wrap: anywhere;
}

@media (max-width: 800px) {
  .experience-row {
    grid-template-columns: 104px 20px minmax(0, 1fr);
    gap: 8px;
  }

  .experience-projects {
    grid-column: 3;
    margin-top: 2px;
  }

  .field-label {
    display: block;
    margin-bottom: 2px;
    color: var(--text);
    font-weight: 600;
  }
}

@media (max-width: 520px) {
  .experience-section {
    padding-block: 28px 34px;
  }

  .experience-row {
    grid-template-columns: 16px minmax(0, 1fr);
    gap: 4px 12px;
    padding-block: 12px;
  }

  .timeline-node {
    grid-column: 1;
    grid-row: 1 / span 3;
    margin-top: 5px;
  }

  .experience-period {
    grid-column: 2;
  }

  .experience-company,
  .experience-projects {
    grid-column: 2;
  }
}
</style>
