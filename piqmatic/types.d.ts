/* eslint-disable */

export interface MovieList {
  results: Movie[]
  next: string
  page: number
  genre: string
}

interface Image {
  url?: string
  caption: string
}

interface Rating {
  current: number
  votes: number
}
export interface Movie {
  id: string
  image: Image
  type: string
  title: string
  release: number
  ratingData: Rating
  director: string
  genres: string[]
  duration: string
  description?: string
}