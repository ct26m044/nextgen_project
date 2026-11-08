<script setup lang="ts">
import { computed } from 'vue'
import { useConferenceData } from '../composables/useConferenceData'
import { useMyProgram } from '../composables/useMyProgram'
import SessionCard from '../components/feature/program/SessionCard.vue'
import MyProgramButton from '../components/feature/my-program/MyProgramButton.vue'
import type { Session } from '../types/conference'

const { sessions, getSession } = useConferenceData()
const { selectedIds, removeInvalidIds } = useMyProgram()

removeInvalidIds(sessions.map(s => s.id))

const mySessions = computed(() =>
  selectedIds.value
    .map(id => getSession(id))
    .filter((s): s is Session => s !== undefined)
    .sort((a, b) =>
      (a.day + a.startTime).localeCompare(b.day + b.startTime)
    )
)
</script>

<template>
  <main class="my-program-page">
    <h1>Mein Programm</h1>

    <template v-if="mySessions.length">
      <p>{{ mySessions.length }} {{ mySessions.length === 1 ? 'Session' : 'Sessions' }} gemerkt</p>

      <ul class="session-list">
        <li v-for="session in mySessions" :key="session.id">
          <SessionCard :session="session" />
          <MyProgramButton :session-id="session.id" />
        </li>
      </ul>
    </template>

    <section v-else class="empty">
      <p>Du hast noch keine Sessions gemerkt.</p>
      <RouterLink :to="{ name: 'program' }">Zum Konferenzprogramm</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.my-program-page {
  min-height: auto;
  max-width: 1000px;
  margin: 0 auto;
}

.session-list {
  display: grid;
  gap: var(--space-stack-md);
  width: 100%;
  margin: var(--space-section-gap) 0 0;
  padding: 0;
  list-style: none;
}

.session-list li {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-xs);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-stack-sm);
  margin-top: var(--space-section-gap);
}
</style>
