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
  grid-column: 1 / -1;
  grid-row: 1;
  margin: 0;
  text-align: left;
}

.footer-quote {
  width: 100%;
  max-width: none;
  justify-self: stretch;
  font-size: 0.76rem;
  line-height: 1.7;
}

.footer-brand {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  gap: 7px;
  color: inherit;
  font-weight: 650;
  text-decoration: none;
}

.footer-top {
  grid-column: 3;
  grid-row: 2;
  justify-self: end;
  text-decoration: none;
}

.site-footer a:hover {
  color: var(--accent);
}

@media (max-width: 700px) {
  .site-footer {
    grid-template-columns: 1fr 1fr;
  }

  .footer-top {
    grid-column: 2;
  }

  .footer-quote {
    font-size: 0.72rem;
  }
}
</style>
