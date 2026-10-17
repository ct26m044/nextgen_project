<script setup lang="ts">
import conferenceData from './data/conference-data.json'

const sessionCount = conferenceData.sessions.length
</script>

<template>
  <main>
    <h1>FrontendNow</h1>
    <p>Willkommen bei PixelFlow</p>
    <p>Total sessions: {{ sessionCount }}</p>
  </main>
</template>
