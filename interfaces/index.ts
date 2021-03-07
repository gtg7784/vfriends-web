export type User = {
  name: string
  role?: string
  description: string
}

export type Award = {
  title: string
  name: string
}

export type Artwork = {
  title: string
  type: string
  artist: string
  description: string
  image?: number[]
  videoId?: string
  index?: number
}

export interface AwardData {
  [keys: number]: Award[];
}

export interface UserData {
  [keys: number]: User[];
}
