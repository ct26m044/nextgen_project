
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useConferenceData } from '../composables/useConferenceData'

const route = useRoute()
const { getSpeaker, getSpeakerSessions } = useConferenceData()

const speaker = computed(() => {
  return getSpeaker(route.params.id as string)
})

const speakerSessions = computed(() => {
  if (!speaker.value) return []
  return getSpeakerSessions(speaker.value.id)
})
</script>

<template>
  <main class="speaker-page" v-if="speaker">
    <h1>{{ speaker.name }}</h1>

    <p>{{ speaker.title }} – {{ speaker.company }}</p>

    <h2>Biografie</h2>
    <p>{{ speaker.bio }}</p>

    <h2>Sessions</h2>

    <ul>
      <li v-for="session in speakerSessions" :key="session.id">
        <RouterLink :to="'/sessions/' + session.id">
          {{ session.title }}
        </RouterLink>
      </li>
    </ul>
  </main>

  <main v-else>
    <h1>Speaker nicht gefunden</h1>
  </main>
</template>

<style scoped>
.speaker-page {
  min-height: auto;
  max-width: 900px;
  margin: 0 auto;
  align-items: flex-start;
  text-align: left;
}

h2 {
  margin-top: var(--space-stack-lg);
}

ul {
  padding-left: var(--space-6);
}

li {
  margin-bottom: var(--space-stack-sm);
}
</style>
