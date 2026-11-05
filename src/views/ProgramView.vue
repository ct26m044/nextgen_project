<script setup lang="ts">
import { useConferenceData } from '../composables/useConferenceData'
import { useSessionFilter } from '../composables/useSessionFilter'
import SessionCard from '../components/feature/program/SessionCard.vue'

const { sessions, tracks } = useConferenceData()

const {
  selectedLevel,
  selectedTrack,
  selectedDay,
  filteredSessions,
  reset
} = useSessionFilter(sessions)
</script>

<template>
  <main class="program-page">
    <h1>Konferenzprogramm</h1>
    <p>Alle {{ sessions.length }} Sessions im Überblick</p>

    <div class="filters">
      <label for="track">Track:</label>
      <select id="track" v-model="selectedTrack">
        <option value="">Alle Tracks</option>
        <option
          v-for="track in tracks"
          :key="track.id"
          :value="track.id"
        >
          {{ track.name }}
        </option>
      </select>

      <label for="day">Tag:</label>
      <select id="day" v-model="selectedDay">
        <option value="">Alle Tage</option>
        <option value="2026-09-15">15.09.2026</option>
        <option value="2026-09-16">16.09.2026</option>
      </select>

      <label for="level">Level:</label>
      <select id="level" v-model="selectedLevel">
        <option value="">Alle Level</option>
        <option value="Einsteiger">Einsteiger</option>
        <option value="Fortgeschritten">Fortgeschritten</option>
        <option value="Experte">Experte</option>
      </select>

      <button type="button" @click="reset">
        Filter zurücksetzen
      </button>
    </div>

    <p>{{ filteredSessions.length }} Sessions gefunden</p>

    <div class="session-list">
      <SessionCard
        v-for="session in filteredSessions"
        :key="session.id"
        :session="session"
      />
    </div>
  </main>
</template>

<style scoped>
.program-page {
  min-height: auto;
  max-width: 1000px;
  margin: 0 auto;
}

.filters {
  margin-top: var(--space-stack-lg);
  display: flex;
  align-items: center;
  gap: var(--space-inline-sm);
  flex-wrap: wrap;
}

.filters select,
.filters button {
  padding: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-surface);
  color: var(--color-text-primary);
}

.filters button {
  cursor: pointer;
}

.session-list {
  display: grid;
  gap: var(--space-stack-md);
  width: 100%;
  margin-top: var(--space-section-gap);
}
</style>
