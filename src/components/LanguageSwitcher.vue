<script setup lang="ts">
import { locales, type Locale } from '../i18n'

const props = defineProps<{
  locale: Locale
  label: string
}>()

const emit = defineEmits<{
  change: [locale: Locale]
}>()

function selectLocale(locale: Locale) {
  emit('change', locale)
}
</script>

<template>
  <div class="language-switcher" role="group" :aria-label="label">
    <button
      v-for="item in locales"
      :key="item.value"
      class="language-option"
      :class="{ 'is-selected': item.value === locale }"
      type="button"
      :aria-label="item.label"
      :aria-pressed="item.value === locale"
      @click="selectLocale(item.value)"
    >
      {{ item.shortLabel }}
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 0 0 auto;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 980px;
}

.language-option {
  display: grid;
  min-width: 34px;
  min-height: 30px;
  place-items: center;
  padding: 0 7px;
  border: 0;
  border-radius: 980px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-family: var(--mono);
  font-size: 0.68rem;
  line-height: 1;
  transition: background-color 160ms ease, color 160ms ease;
}

.language-option:hover {
  color: var(--text);
}

.language-option.is-selected {
  border: 1px solid #B4C2CF;
  background: #B4C2CF;
  color: #080f17;
  font-weight: 700;
}

@media (max-width: 560px) {
  .language-option {
    min-width: 30px;
    min-height: 28px;
    padding-inline: 5px;
    font-size: 0.64rem;
  }
}
</style>
