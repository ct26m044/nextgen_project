import { ref, computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

type Session = {
  id: string
  title: string
  trackId: string
  roomId: string
  day: string
  startTime: string
  endTime: string
  level: string
}

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