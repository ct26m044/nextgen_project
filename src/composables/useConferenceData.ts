import type {
  Conference,
  Room,
  Session,
  SessionDetails,
  Speaker,
  Track
} from '../types/conference'

let conference: Conference
let tracks: Track[] = []
let rooms: Room[] = []
let speakers: Speaker[] = []
let sessions: Session[] = []

let sessionsById = new Map<string, Session>()
let speakersById = new Map<string, Speaker>()
let tracksById = new Map<string, Track>()
let roomsById = new Map<string, Room>()

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: ${res.status}`)
  return res.json() as Promise<T>
}

/** Called once before mount. The requests go through the SW (Cache First). */
export async function loadConferenceData(): Promise<void> {
  const [meta, sessionData, speakerData] = await Promise.all([
    fetchJson<{ conference: Conference; tracks: Track[]; rooms: Room[] }>('/api/conference.json'),
    fetchJson<Session[]>('/api/sessions.json'),
    fetchJson<Speaker[]>('/api/speakers.json')
  ])

  conference = meta.conference
  tracks = meta.tracks
  rooms = meta.rooms
  sessions = sessionData
  speakers = speakerData

  sessionsById = new Map(sessions.map(s => [s.id, s]))
  speakersById = new Map(speakers.map(s => [s.id, s]))
  tracksById = new Map(tracks.map(t => [t.id, t]))
  roomsById = new Map(rooms.map(r => [r.id, r]))
}

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
