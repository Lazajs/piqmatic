/* eslint-disable */

export interface MovieList {
  results: Movie[]
  next: string
  page: number
  genre: string
}

export interface Movie {
  id: string
  image: Image
  type: string
  title: string
  release: number
}

interface Image {
  url?: string
  caption: string
}
