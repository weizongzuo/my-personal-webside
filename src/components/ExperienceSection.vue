<script setup lang="ts">
import { computed } from 'vue'
import type { PortfolioCopy } from '../i18n'

const props = defineProps<{
  copy: PortfolioCopy
}>()

const experiences = computed(() => [...props.copy.workHistory].reverse())
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
      <li v-for="experience in experiences" :key="experience.company" class="experience-row">
        <time class="experience-period">{{ experience.period }}</time>
        <span class="timeline-node" aria-hidden="true"></span>
        <div class="experience-company">
          <h3>{{ experience.company }}</h3>
          <p>{{ experience.summary }}</p>
        </div>
        <div class="experience-projects">
          <span class="field-label">{{ copy.experienceProjectsLabel }}</span>
          <ul>
            <li v-for="project in experience.projects" :key="project">{{ project }}</li>
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
  font-family: var(--mono);
  font-size: 0.7rem;
  font-variant-numeric: tabular-nums;
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
