<script setup lang="ts">
import type { PortfolioCopy } from '../i18n'

defineProps<{
  copy: PortfolioCopy
}>()
</script>

<template>
  <section id="contact" class="contact-section" :aria-label="copy.contactNav">
    <div class="contact-copy">
      <h2>{{ copy.contactTitle }}</h2>
      <p>{{ copy.contactDescription }}</p>
    </div>
    <div class="contact-links">
      <a
        class="contact-link"
        href="https://github.com/weizongzuo"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${copy.githubProfileText}: github.com/weizongzuo`"
      >
        <svg class="contact-link-icon github-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.61 1.21 3.25.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.62 5.23-5.11 5.5.4.35.76 1.03.76 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
          />
        </svg>
        <span class="github-url">github.com/weizongzuo</span>
        <span class="github-short-label">GitHub</span>
      </a>
      <a class="contact-link" href="mailto:light20130826@gmail.com" :aria-label="copy.contactEmailLabel">
        <svg class="contact-link-icon email-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3.5 6.5h17v11h-17z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        <span>light20130826@gmail.com</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-block: 0 30px;
  padding: 18px 22px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.contact-copy {
  min-width: 0;
}

.contact-copy h2 {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 600;
}

.contact-copy p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.6;
}

.contact-links {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 18px;
}

.contact-link {
  display: inline-flex;
  min-width: 0;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  color: var(--accent);
  font-size: 0.75rem;
  line-height: 1.5;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 180ms var(--ease-out);
}

.contact-link:hover {
  color: var(--accent-strong);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: 3px;
}

.contact-link-icon {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.email-icon {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

@media (max-width: 520px) {
  .contact-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 24px;
    padding: 16px;
  }

  .contact-links {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }

  .contact-link {
    gap: 6px;
    font-size: 0.62rem;
  }

  .contact-link-icon {
    width: 17px;
    height: 17px;
  }
}

@media (max-width: 370px) {
  .contact-links {
    gap: 6px;
  }

  .github-url {
    display: none;
  }

  .github-short-label {
    display: inline;
  }

  .contact-link {
    gap: 4px;
    font-size: 0.56rem;
  }
}

.github-short-label {
  display: none;
}
</style>
