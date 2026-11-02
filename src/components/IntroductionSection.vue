<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { PortfolioCopy } from '../i18n'

defineProps<{
  copy: PortfolioCopy
  experienceDuration: string
}>()

type Snowflake = {
  id: number
  style: CSSProperties & { '--drift': string; '--rest-top': string }
}

const snowflakes: Snowflake[] = Array.from({ length: 72 }, (_, id) => {
  const size = 1 + (id % 3)
  const duration = 8 + ((id * 7) % 8)

  return {
    id,
    style: {
      left: `${(id * 47 + 13) % 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: [0.38, 0.58, 0.82][size - 1],
      animationDuration: `${duration}s`,
      animationDelay: `${-((id * 11) % duration)}s`,
      '--drift': `${4 + ((id * 5) % 11)}px`,
      '--rest-top': `${(id * 31) % 100}%`,
    },
  }
})
</script>

<template>
  <section id="home" class="introduction" aria-labelledby="hero-title">
    <div class="snowfall" aria-hidden="true">
      <span
        v-for="flake in snowflakes"
        :key="flake.id"
        class="snowflake"
        :style="flake.style"
      />
    </div>
    <div class="hero-layout">
      <div class="hero-copy">
        <h1 id="hero-title">
          {{ copy.heroTitleFirst }}
        </h1>
        <p class="hero-role">{{ copy.heroTitleSecond }}</p>
        <div class="hero-education">
          <p class="education-school">{{ copy.heroEducationSchool }}</p>
          <p class="education-period">{{ copy.heroEducationPeriod }}</p>
          <p>{{ copy.heroEducationDegree }}</p>
        </div>
      </div>

      <aside class="hero-summary" :aria-label="copy.heroSummaryTitle">
        <p class="summary-label">{{ copy.heroSummaryTitle }}</p>
        <p
          v-for="(paragraph, index) in copy.heroSummaryParagraphs"
          :key="index"
          class="summary-copy"
        >
          {{ paragraph.replace('{experience}', experienceDuration) }}
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.introduction {
  position: relative;
  display: grid;
  min-height: 450px;
  align-items: center;
  padding-block: 64px 86px;
  --hero-overlay-strong: rgb(7 20 33 / 92%);
  --hero-overlay-medium: rgb(7 20 33 / 82%);
  --hero-overlay-soft: rgb(7 20 33 / 58%);
  --hero-overlay-bottom: rgb(7 20 33 / 20%);
  --hero-heading: #f3f7fa;
  --hero-body: #d0dbe4;
  --hero-role: #51ddbd;
}

:global(:root[data-theme='light'] .introduction) {
  --hero-overlay-strong: rgb(218 228 238 / 56%);
  --hero-overlay-medium: rgb(218 228 238 / 46%);
  --hero-overlay-soft: rgb(218 228 238 / 36%);
  --hero-overlay-bottom: rgb(218 228 238 / 14%);
  --hero-heading: var(--text);
  --hero-body: #263440;
  --hero-role: var(--accent);
}

.introduction::before {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  background-color: var(--page);
  background-image:
    linear-gradient(90deg, var(--hero-overlay-strong) 0%, var(--hero-overlay-medium) 38%, var(--hero-overlay-soft) 100%),
    linear-gradient(0deg, var(--hero-overlay-bottom), transparent 42%),
    url('/mount-fuji.jpg');
  background-position: center, center, center top;
  background-size: cover;
  content: '';
}

.snowfall {
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.snowflake {
  position: absolute;
  top: -4px;
  display: block;
  border-radius: 50%;
  background: #f7fbff;
  box-shadow: 0 0 2px rgb(191 224 255 / 55%);
  animation: snowfall linear infinite;
  will-change: top, transform;
}

.snowflake:nth-child(3n + 1) {
  background: #dceeff;
}

.snowflake:nth-child(3n) {
  filter: blur(0.35px);
}

.hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 0.9fr) minmax(280px, 0.72fr);
  align-items: center;
  gap: clamp(32px, 7vw, 100px);
}

.hero-copy {
  min-width: 0;
  color: var(--hero-heading);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 650;
  letter-spacing: -0.035em;
  line-height: 1.2;
}

.hero-role {
  margin: 7px 0 0;
  color: var(--hero-role);
  font-size: clamp(1.05rem, 1.8vw, 1.4rem);
  font-weight: 600;
  line-height: 1.5;
}

.hero-education {
  display: grid;
  gap: 3px;
  max-width: 560px;
  margin: 16px 0 0;
  color: var(--hero-body);
  font-size: 0.82rem;
  line-height: 1.6;
}

.hero-education p {
  margin: 0;
}

.education-school {
  color: var(--hero-heading);
  font-size: 0.92rem;
  font-weight: 600;
}

.hero-summary {
  min-width: 0;
  padding: 0;
  color: var(--hero-heading);
}

.summary-label {
  margin: 0 0 18px;
  color: var(--hero-heading);
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.5;
}

.summary-copy {
  margin: 0;
  color: var(--hero-body);
  font-size: 0.82rem;
  line-height: 1.8;
}

.summary-copy + .summary-copy {
  margin-top: 12px;
}

@media (max-width: 700px) {
  .introduction {
    min-height: 0;
    padding-block: 42px 76px;
  }

  .introduction::before {
    background-image:
      linear-gradient(90deg, var(--hero-overlay-strong), var(--hero-overlay-soft)),
      linear-gradient(0deg, var(--hero-overlay-bottom), transparent 48%),
      url('/mount-fuji.jpg');
    background-position: center, center, center top;
  }

  .hero-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  h1 {
    font-size: clamp(1.9rem, 8vw, 2.5rem);
  }

  .hero-education {
    max-width: 460px;
    font-size: 0.8rem;
  }

}

@keyframes snowfall {
  0% {
    top: -4px;
    transform: translateX(0);
  }

  45% {
    transform: translateX(calc(var(--drift) * 0.35));
  }

  100% {
    top: calc(100% + 4px);
    transform: translateX(var(--drift));
  }
}

@media (prefers-reduced-motion: reduce) {
  .snowflake {
    animation: none;
    top: var(--rest-top);
  }
}

@media (min-width: 701px) and (max-width: 900px) {
  .hero-layout {
    grid-template-columns: minmax(0, 1fr) minmax(240px, 0.8fr);
    gap: 28px;
  }

  h1 {
    font-size: clamp(1.9rem, 4vw, 2.6rem);
  }
}

</style>
