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

<style scoped>
.session-detail {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-lg);
  padding: var(--space-card-padding);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text-primary);
  text-align: left;
}

/* Header: track badge + title */
.session-detail header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-stack-xs);
}

/* Navy on turquoise = 7.06:1 (WCAG AA) – never white on turquoise */
.track {
  padding: var(--space-1) var(--space-inline-md);
  border-radius: 999px;
  background: var(--color-accent);
  color: var(--color-text-primary);
  font-family: var(--text-label-font-family);
  font-size: var(--text-label-font-size);
  font-weight: var(--text-label-font-weight);
  line-height: var(--text-label-line-height);
  letter-spacing: var(--letter-spacing-wide);
}

.track:empty {
  display: none;
}

.session-detail h1 {
  font-family: var(--text-h1-font-family);
  font-size: var(--text-h1-font-size);
  font-weight: var(--text-h1-font-weight);
  line-height: var(--text-h1-line-height);
  letter-spacing: var(--letter-spacing-normal);
}

/* Meta information as label/value grid */
.meta {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: var(--space-inline-lg);
  row-gap: var(--space-stack-xs);
  margin: 0;
  padding: var(--space-stack-md) var(--space-inline-lg);
  background: var(--color-surface-muted);
  border-radius: 8px;
}

.meta dt {
  color: var(--color-text-muted);
  font-family: var(--text-label-font-family);
  font-size: var(--text-label-font-size);
  font-weight: var(--text-label-font-weight);
  line-height: var(--text-body-line-height);
}

.meta dd {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--text-body-font-family);
  font-size: var(--text-body-font-size);
  font-weight: var(--text-body-font-weight);
  line-height: var(--text-body-line-height);
}

.abstract {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Speakers */
.session-detail section {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  padding-top: var(--space-stack-lg);
  border-top: 1px solid var(--color-border);
}

.session-detail h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--text-h3-font-family);
  font-size: var(--text-h3-font-size);
  font-weight: var(--text-h3-font-weight);
  line-height: var(--text-h3-line-height);
}

.speakers {
  display: grid;
  gap: var(--space-stack-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

.speakers li {
  padding: var(--space-stack-sm) var(--space-inline-lg);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-accent);
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-family: var(--text-body-font-family);
  font-size: var(--text-body-font-size);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-body-line-height);
}

.speakers span {
  display: block;
  color: var(--color-text-secondary);
  font-family: var(--text-body-small-font-family);
  font-size: var(--text-body-small-font-size);
  font-weight: var(--text-body-small-font-weight);
  line-height: var(--text-body-small-line-height);
}

@media (max-width: 480px) {
  .session-detail h1 {
    font-size: var(--text-h2-font-size);
  }

  .meta {
    grid-template-columns: 1fr;
  }

  .meta dd + dt {
    margin-top: var(--space-stack-xs);
  }
}
</style>
