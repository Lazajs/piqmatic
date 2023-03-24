interface Image {
  url?: string
  caption: string
}
export interface Movie {
  id: string
  image: Image
  type: string
  title: string
  release: number
}

export interface MovieList {
  results: Movie[]
  next: string
  page: number
  genre: string
}

export interface MovieFromAPI {
  id: string
  primaryImage: {
    url?: string
    caption: {
      plainText: string
    }
  }
  titleType: {
    text: string
  }
  titleText: {
    text: string
  }
  releaseYear: {
    year: number
  }
}
export interface MovieListFromAPI extends MovieList {
  results: MovieFromAPI[]
}
