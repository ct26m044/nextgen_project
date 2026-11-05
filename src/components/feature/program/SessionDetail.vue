<script setup lang="ts">
import type { SessionDetails } from '../../../types/conference'

defineProps<{ session: SessionDetails }>()

const dateFormatter = new Intl.DateTimeFormat('de-AT', {
  weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
})
const formatDay = (iso: string) => dateFormatter.format(new Date(iso))
</script>

<template>
  <article class="session-detail">
    <header>
      <p class="track">{{ session.track?.name }}</p>
      <h1>{{ session.title }}</h1>
    </header>

    <dl class="meta">
      <dt>Zeit</dt>
      <dd>
        <time :datetime="session.day">{{ formatDay(session.day) }}</time>,
        {{ session.startTime }}–{{ session.endTime }}
      </dd>
      <dt>Raum</dt>   <dd>{{ session.room?.name }}</dd>
      <dt>Level</dt>  <dd>{{ session.level }}</dd>
      <dt>Format</dt> <dd>{{ session.format }}</dd>
    </dl>

    <p class="abstract">{{ session.abstract }}</p>

    <section>
      <h2>{{ session.speakers.length > 1 ? 'Speaker' : 'Speaker:in' }}</h2>
      <ul class="speakers">
        <li v-for="speaker in session.speakers" :key="speaker.id">
          <!-- RouterLink for speaker detail view -->
          {{ speaker.name }}
          <span>{{ speaker.title }}, {{ speaker.company }}</span>
        </li>
      </ul>
    </section>

    <!-- later: <MyProgramButton :session-id="session.id" /> -->
  </article>
</template>
