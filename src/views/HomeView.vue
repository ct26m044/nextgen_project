<script setup lang="ts">
import { useConferenceData } from '../composables/useConferenceData'

const { sessions } = useConferenceData()
const sessionCount = sessions.length
</script>

<template>
  <main>
    <h1>FrontendNow</h1>
    <p>Willkommen bei PixelFlow</p>
    <p>Total sessions: {{ sessionCount }}</p>
  </main>
</template>