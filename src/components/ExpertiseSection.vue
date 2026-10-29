<script setup lang="ts">
import type { PortfolioCopy } from '../i18n'

defineProps<{
  copy: PortfolioCopy
}>()
</script>

<template>
  <section id="expertise" class="expertise-section section-rule" aria-labelledby="expertise-title">
    <div class="section-heading">
      <div class="heading-title">
        <span class="heading-marker" aria-hidden="true"></span>
        <h2 id="expertise-title">{{ copy.focusTitle }}</h2>
      </div>
    </div>

    <div class="technology-groups">
      <article v-for="area in copy.focusAreas" :key="area.title" class="technology-group">
        <h3 class="group-label">{{ area.title }}</h3>
        <ul class="technology-list" :aria-label="area.title">
          <li
            v-for="technology in area.technologies"
            :key="technology"
          >
            {{ technology }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-rule {
  border-top: 0;
}

.expertise-section {
  padding-block: 28px 32px;
}

.technology-groups {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
  gap: 14px;
}

.technology-group {
  min-width: 0;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.group-label {
  margin: 0 0 13px;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.technology-list li {
  position: relative;
  overflow: hidden;
  width: fit-content;
  max-width: 100%;
  padding: 6px 9px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface-raised);
  color: var(--text);
  cursor: pointer;
  font-family: Inter, 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.8rem;
  line-height: 1.35;
  white-space: nowrap;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease;
}

.technology-list li::after {
  position: absolute;
  inset: -1px;
  transform: translateX(-140%) skewX(-18deg);
  background: linear-gradient(105deg, transparent 35%, rgb(81 221 189 / 28%) 50%, transparent 65%);
  content: '';
  pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
  .technology-list li:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, var(--surface-raised));
    color: var(--accent-strong);
    box-shadow: 0 6px 18px rgb(0 0 0 / 22%), 0 0 0 1px color-mix(in srgb, var(--accent) 28%, transparent);
  }

  .technology-list li:hover::after {
    transform: translateX(140%) skewX(-18deg);
    transition: transform 520ms ease;
  }
}

:root[data-theme='light'] .technology-list li:hover {
  color: var(--accent-strong);
}

@media (prefers-reduced-motion: reduce) {
  .technology-list li,
  .technology-list li::after {
    transition: none;
  }
}

@media (max-width: 800px) {
  .technology-groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .technology-groups {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
