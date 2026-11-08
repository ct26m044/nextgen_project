<script setup lang="ts">
import { useMyProgram } from '../../../composables/useMyProgram'

const { count } = useMyProgram()
</script>

<template>
  <RouterLink :to="{ name: 'my-program' }" class="my-program-counter">
    Mein Programm
    <span class="badge" :aria-label="`${count} Sessions gemerkt`">{{ count }}</span>
  </RouterLink>
</template>

<style scoped>
.my-program-counter {
  display: inline-flex;
  align-items: center;
  gap: var(--space-inline-xs);
}

.badge {
  min-width: 1.5em;
  padding: 0 var(--space-1);
  border-radius: 999px;
  background: var(--color-accent);
  color: var(--color-text-primary);
  font-size: var(--text-label-font-size);
  font-weight: var(--text-label-font-weight);
  text-align: center;
}
</style>
