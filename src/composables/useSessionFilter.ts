import { ref, computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { Session } from '../types/conference'

export function useSessionFilter(sessions: MaybeRefOrGetter<Session[]>) {
  const selectedLevel = ref('')
  const selectedTrack = ref('')
  const selectedDay = ref('')

  const filteredSessions = computed(() => {
    return toValue(sessions).filter(session => {
      const matchesLevel = selectedLevel.value === '' ||
        session.level === selectedLevel.value

      const matchesTrack = selectedTrack.value === '' ||
        session.trackId === selectedTrack.value

      const matchesDay = selectedDay.value === '' ||
        session.day === selectedDay.value

      return matchesLevel && matchesTrack && matchesDay
    })
  })

  function reset() {
    selectedLevel.value = ''
    selectedTrack.value = ''
    selectedDay.value = ''
  }

  return {
    selectedLevel,
    selectedTrack,
    selectedDay,
    filteredSessions,
    reset
  }
}