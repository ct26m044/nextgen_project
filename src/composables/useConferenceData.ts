import conferenceData from '../data/conference-data.json'
import type {
  Conference,
  Room,
  Session,
  SessionDetails,
  Speaker,
  Track
} from '../types/conference'

const conference: Conference = conferenceData.conference
const tracks: Track[] = conferenceData.tracks
const rooms: Room[] = conferenceData.rooms
const speakers: Speaker[] = conferenceData.speakers
// JSON infers level/format as plain `string`, so cast once at the boundary
const sessions = conferenceData.sessions as Session[]

const sessionsById = new Map<string, Session>(sessions.map(s => [s.id, s]))
const speakersById = new Map<string, Speaker>(speakers.map(s => [s.id, s]))
const tracksById = new Map<string, Track>(tracks.map(t => [t.id, t]))
const roomsById = new Map<string, Room>(rooms.map(r => [r.id, r]))

export function useConferenceData() {
  function getSession(id: string): Session | undefined {
    return sessionsById.get(id)
  }

  function getSpeaker(id: string): Speaker | undefined {
    return speakersById.get(id)
  }

  function getTrack(id: string): Track | undefined {
    return tracksById.get(id)
  }

  function getRoom(id: string): Room | undefined {
    return roomsById.get(id)
  }

  function getSessionSpeakers(sessionId: string): Speaker[] {
    const session = getSession(sessionId)

    if (!session) return []

    return session.speakerIds
      .map(id => getSpeaker(id))
      .filter((speaker): speaker is Speaker => speaker !== undefined)
  }

  function getSpeakerSessions(speakerId: string): Session[] {
    return sessions.filter(session =>
      session.speakerIds.includes(speakerId)
    )
  }

  function getSessionDetails(id: string): SessionDetails | undefined {
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
    conference,
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
