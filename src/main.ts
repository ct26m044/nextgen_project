import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadConferenceData } from './composables/useConferenceData'
import './style.css'

const DATA_URLS = ['/api/conference.json', '/api/sessions.json', '/api/speakers.json']

// Was this page load already handled by the service worker? On the very first
// visit it is not, so the data requests below bypass the Cache First rules B–D.
const controlledAtStart =
  'serviceWorker' in navigator && navigator.serviceWorker.controller !== null

loadConferenceData()
  .then(() => {
    createApp(App).use(router).mount('#app')
    if (!controlledAtStart) void warmDataCache()
  })
  .catch(() => {
    // First visit while offline: nothing is cached yet (accepted limitation in the concept)
    document.getElementById('app')!.textContent =
      'Das Programm konnte nicht geladen werden. Bitte die Seite einmal mit Internetverbindung öffnen.'
  })

/**
 * Fix for scenario i (protocol): on the first visit the conference data was
 * loaded before the service worker existed, so the runtime caches stayed
 * empty. Once the SW controls the page (clientsClaim), request the data again
 * so the Cache First rules B–D store it. One online visit is then enough.
 */
async function warmDataCache(): Promise<void> {
  if (!('serviceWorker' in navigator)) return

  await navigator.serviceWorker.ready
  if (navigator.serviceWorker.controller === null) {
    await new Promise<void>(resolve =>
      navigator.serviceWorker.addEventListener('controllerchange', () => resolve(), { once: true })
    )
  }

  try {
    await Promise.all(DATA_URLS.map(url => fetch(url)))
  } catch {
    // Went offline right after the first load: caches stay empty, nothing else to do
  }
}
