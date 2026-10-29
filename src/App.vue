<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import IntroductionSection from './components/IntroductionSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { locales, messages, type Locale } from './i18n'
import { calculateExperienceMonths, formatExperience } from './experience'

type Theme = 'dark' | 'light'

const preferenceKeys = {
  theme: 'portfolio-theme',
  locale: 'portfolio-locale',
} as const

function isLocale(value: string | null): value is Locale {
  return locales.some((localeOption) => localeOption.value === value)
}

const savedTheme = localStorage.getItem(preferenceKeys.theme)
const savedLocale = localStorage.getItem(preferenceKeys.locale)
const theme = ref<Theme>(savedTheme === 'light' ? 'light' : 'dark')
const locale = ref<Locale>(isLocale(savedLocale) ? savedLocale : 'ja')
const currentDate = ref(new Date())
const copy = computed(() => messages[locale.value])
const experienceDuration = computed(() =>
  formatExperience(
    calculateExperienceMonths(
      copy.value.workHistory.map((experience) => experience.period),
      currentDate.value,
    ),
    locale.value,
  ),
)

let experienceRefreshTimer: number | undefined

function scheduleExperienceRefresh() {
  const now = new Date()
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  experienceRefreshTimer = window.setTimeout(() => {
    currentDate.value = new Date()
    scheduleExperienceRefresh()
  }, nextMonth.getTime() - now.getTime())
}

onMounted(scheduleExperienceRefresh)

onBeforeUnmount(() => {
  if (experienceRefreshTimer !== undefined) {
    window.clearTimeout(experienceRefreshTimer)
  }
})

watch(
  [theme, locale],
  ([currentTheme, currentLocale]) => {
    localStorage.setItem(preferenceKeys.theme, currentTheme)
    localStorage.setItem(preferenceKeys.locale, currentLocale)
    document.documentElement.dataset.theme = currentTheme
    document.documentElement.lang = currentLocale
    document.title = messages[currentLocale].pageTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', messages[currentLocale].description)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', currentTheme === 'dark' ? '#080f17' : '#f5f5f7')
  },
  { immediate: true },
)
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">{{ copy.skipLink }}</a>
    <SiteHeader
      :theme="theme"
      :locale="locale"
      :copy="copy"
      @toggle-theme="theme = theme === 'dark' ? 'light' : 'dark'"
      @change-locale="locale = $event"
    />

    <main id="main">
      <IntroductionSection :copy="copy" :experience-duration="experienceDuration" />
      <ExpertiseSection :copy="copy" />
      <ExperienceSection :copy="copy" />
      <ProjectSection :copy="copy" />
      <ContactSection :copy="copy" />
    </main>

    <SiteFooter :copy="copy" />
  </div>
</template>
