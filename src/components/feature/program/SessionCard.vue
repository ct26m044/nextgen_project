<script setup lang="ts">
import { useConferenceData } from '../../../composables/useConferenceData'
import type { Session } from '../../../types/conference'

defineProps<{
  session: Session
}>()

const { getTrack, getRoom } = useConferenceData()
</script>

<template>
  <article class="session-card">
    <h2>
      <RouterLink :to="{ name: 'session-detail', params: { id: session.id } }">
        {{ session.title }}
      </RouterLink>
    </h2>

    <p>
      {{ session.day }} |
      {{ session.startTime }}–{{ session.endTime }}
    </p>

    <p>Track: {{ getTrack(session.trackId)?.name }}</p>
    <p>Raum: {{ getRoom(session.roomId)?.name }}</p>
    <p>Level: {{ session.level }}</p>
  </article>
</template>

<style scoped>
.session-card {
  padding: var(--space-card-padding);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-align: left;
}

.session-card h2 {
  margin-top: 0;
  color: var(--color-text-primary);
}

.session-card p {
  margin-top: 8px;
}
</style>
