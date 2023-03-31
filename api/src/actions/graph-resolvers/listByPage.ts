import type { MovieListFromAPI, Movie, MovieFromAPI } from 'types'
import request from '../request.js'

type PageData = Omit<MovieListFromAPI, 'genre'>

const filterResults = (movie: MovieFromAPI) => {
  if (movie.primaryImage?.url === undefined ||
    movie.plot?.language?.id !== 'en-US') return false
  return true
}

export default async function listByPage (root, args) {
  const ENDPOINT = (args?.next ?? '/titles?titleType=movie&sort=year.decr&year=2023&info=base_info')
  const { next: nextPage, results } = await request<PageData>(ENDPOINT)

  const movies: Array<Omit<Movie, 'director'>> = results.filter(filterResults).map(movie => {
    return {
      id: movie.id,
      image: {
        url: movie.primaryImage.url,
        caption: movie.primaryImage.caption.plainText
      },
      type: movie.titleType.text,
      title: movie.titleText.text,
      release: movie.releaseYear.year,
      description: movie.plot.plotText.plainText,
      ratingData: {
        current: movie.ratingsSummary.aggregateRating || 0,
        votes: movie.ratingsSummary.voteCount
      },
      genres: movie.genres.genres.map(genre => genre.text)
    }
  }
  )

  return {
    next: nextPage,
    results: movies
  }
}
