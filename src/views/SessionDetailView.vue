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
    <RouterLink :to="{ name: 'program' }">← Zurück zum Programm</RouterLink>

    <SessionDetail v-if="session" :session="session" />

    <section v-else>
      <h1>Session nicht gefunden</h1>
      <p>Die Session „{{ id }}“ existiert nicht.</p>
    </section>
  </main>
</template>
