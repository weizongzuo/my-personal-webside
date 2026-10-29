<script setup lang="ts">
import type { PortfolioCopy } from '../i18n'

defineProps<{
  copy: PortfolioCopy
}>()
</script>

<template>
  <footer class="site-footer">
    <a class="footer-brand" href="#home" :aria-label="copy.homeLabel">
      My Portfolio
    </a>
    <p class="footer-quote">{{ copy.footerQuote }}</p>
    <a class="footer-top" href="#home">{{ copy.footerBackToTop }} <span aria-hidden="true">↑</span></a>
  </footer>
</template>

<style scoped>
.site-footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  padding-block: 18px 24px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.66rem;
}

.site-footer p {
  margin: 0;
  text-align: center;
}

.footer-quote {
  max-width: 620px;
  justify-self: center;
  font-size: 0.76rem;
  line-height: 1.7;
  text-wrap: pretty;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 7px;
  color: inherit;
  font-weight: 650;
  text-decoration: none;
}

.footer-top {
  justify-self: end;
  text-decoration: none;
}

.site-footer a:hover {
  color: var(--accent);
}

@media (max-width: 560px) {
  .site-footer {
    grid-template-columns: 1fr 1fr;
  }

  .site-footer p {
    grid-column: 1 / -1;
    grid-row: 2;
    text-align: left;
  }

  .footer-quote {
    max-width: none;
    font-size: 0.72rem;
    text-wrap: balance;
  }
}
</style>
