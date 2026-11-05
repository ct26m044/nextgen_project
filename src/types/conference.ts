export type Level = 'Einsteiger' | 'Fortgeschritten' | 'Experte'
export type Format = 'Vortrag' | 'Workshop' | 'Podium'

export interface Track {
  id: string
  name: string
}

export interface Room {
  id: string
  name: string
  capacity: number
}

export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  sessionIds: string[]
}

export interface Session {
  id: string
  title: string
  abstract: string
  trackId: string
  speakerIds: string[]
  day: string
  startTime: string
  endTime: string
  roomId: string
  level: Level
  format: Format
}

export interface SessionDetails extends Session {
  track?: Track
  room?: Room
  speakers: Speaker[]
}

export interface Conference {
  name: string
  tagline: string
  dates: string[]
  location: string
  timezone: string
}

