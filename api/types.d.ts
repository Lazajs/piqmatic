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
  description: string
  ratingData: Rating
  director: string
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
  ratingsSummary: {
    aggregateRating: number | null
    voteCount: number
  }
  plot: {
    language: {
      id: string | 'en-US'
    }
    plotText: {
      plainText: string
    }
  }
}
export interface MovieListFromAPI extends MovieList {
  results: MovieFromAPI[]
}
