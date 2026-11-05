<script setup lang="ts">
import { computed } from 'vue'
import { useConferenceData } from '../composables/useConferenceData'
import SessionDetail from '../components/feature/program/SessionDetail.vue'

const props = defineProps<{ id: string }>()
const { getSessionDetails } = useConferenceData()

const session = computed(() => getSessionDetails(props.id))
</script>

<template>
  <main class="session-detail-page">
    <RouterLink class="back-link" :to="{ name: 'program' }">← Zurück zum Programm</RouterLink>

    <SessionDetail v-if="session" :session="session" />

    <section v-else class="not-found">
      <h1>Session nicht gefunden</h1>
      <p>Die Session „{{ id }}“ existiert nicht.</p>
    </section>
  </main>
</template>

<style scoped>
.session-detail-page {
  width: 100%;
  max-width: 800px;
  min-height: auto;
  margin: 0 auto;
  align-items: stretch;
  justify-content: flex-start;
  gap: var(--space-stack-lg);
  padding-block: var(--space-section-gap);
  text-align: left;
}

.back-link {
  align-self: flex-start;
  padding: var(--space-1) var(--space-inline-xs);
  border-radius: 4px;
  color: var(--color-action-primary);
  font-family: var(--text-label-font-family);
  font-size: var(--text-label-font-size);
  font-weight: var(--text-label-font-weight);
  line-height: var(--text-label-line-height);
  text-decoration: none;
}

.back-link:hover {
  color: var(--color-action-primary-hover);
  text-decoration: underline;
}

.back-link:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.not-found {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  padding: var(--space-card-padding);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.not-found h1 {
  font-family: var(--text-h2-font-family);
  font-size: var(--text-h2-font-size);
  font-weight: var(--text-h2-font-weight);
  line-height: var(--text-h2-line-height);
  letter-spacing: var(--letter-spacing-normal);
}
</style>
