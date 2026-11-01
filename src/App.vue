<script setup lang="ts">
import conferenceData from './data/conference-data.json'

const sessionCount = conferenceData.sessions.length
</script>

<template>
  <div>
    <header>
      <h2>PixelFlow</h2>
      <nav>
        <RouterLink to="/">Startseite</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>