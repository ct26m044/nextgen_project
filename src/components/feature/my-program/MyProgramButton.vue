<script setup lang="ts">
import { computed } from 'vue'
import { useMyProgram } from '../../../composables/useMyProgram'

const props = defineProps<{ sessionId: string }>()

const { has, toggle } = useMyProgram()
const isSelected = computed(() => has(props.sessionId))
</script>

<template>
  <button
    type="button"
    class="my-program-button"
    :class="{ selected: isSelected }"
    :aria-pressed="isSelected"
    @click="toggle(sessionId)"
  >
    {{ isSelected ? '✓ In meinem Programm' : '+ Zu meinem Programm' }}
  </button>
</template>

<style scoped>
.my-program-button {
  align-self: flex-start;
  padding: var(--space-2) var(--space-inline-lg);
  border: 2px solid var(--color-action-primary);
  border-radius: 8px;
  background: var(--color-action-primary);
  color: var(--color-action-primary-text);
  font-family: var(--text-label-font-family);
  font-size: var(--text-label-font-size);
  font-weight: var(--text-label-font-weight);
  line-height: var(--text-label-line-height);
  cursor: pointer;
}

.my-program-button:hover {
  border-color: var(--color-action-primary-hover);
  background: var(--color-action-primary-hover);
}

.my-program-button.selected {
  background: var(--color-surface);
  color: var(--color-action-primary);
}

.my-program-button.selected:hover {
  background: var(--color-surface-muted);
}

.my-program-button:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
</style>
