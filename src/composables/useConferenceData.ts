
import conferenceData from '../data/conference-data.json'

const { sessions, speakers, tracks, rooms } = conferenceData

const sessionsById = new Map(sessions.map(s => [s.id, s]))
const speakersById = new Map(speakers.map(s => [s.id, s]))
const tracksById = new Map(tracks.map(t => [t.id, t]))
const roomsById = new Map(rooms.map(r => [r.id, r]))

export function useConferenceData() {
  function getSession(id: string) {
    return sessionsById.get(id)
  }

  function getSpeaker(id: string) {
    return speakersById.get(id)
  }

  function getTrack(id: string) {
    return tracksById.get(id)
  }

  function getRoom(id: string) {
    return roomsById.get(id)
  }

  function getSessionSpeakers(sessionId: string) {
    const session = getSession(sessionId)

    if (!session) return []

    return session.speakerIds
      .map(id => getSpeaker(id))
      .filter((speaker): speaker is NonNullable<typeof speaker> =>
        speaker !== undefined
      )
  }

  function getSpeakerSessions(speakerId: string) {
    return sessions.filter(session =>
      session.speakerIds.includes(speakerId)
    )
  }

  function getSessionDetails(id: string) {
    const session = getSession(id)

    if (!session) return undefined

    return {
      ...session,
      track: getTrack(session.trackId),
      room: getRoom(session.roomId),
      speakers: getSessionSpeakers(session.id)
    }
  }

  return {
    sessions,
    speakers,
    tracks,
    rooms,
    getSession,
    getSpeaker,
    getTrack,
    getRoom,
    getSessionSpeakers,
    getSpeakerSessions,
    getSessionDetails
  }
}
