import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadConferenceData } from './composables/useConferenceData'
import './style.css'

loadConferenceData()
  .then(() => {
    createApp(App).use(router).mount('#app')
  })
  .catch(() => {
    // First visit while offline: nothing is cached yet (accepted limitation in the concept)
    document.getElementById('app')!.textContent =
      'Das Programm konnte nicht geladen werden. Bitte die Seite einmal mit Internetverbindung öffnen.'
  })