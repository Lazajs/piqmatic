import type { Movie, MovieFromAPI, MovieListFromAPI } from 'types'
import request from '../request.js'

const filterResults = (movie: MovieFromAPI) => {
  if (movie.primaryImage?.url === undefined ||
    movie.plot?.language?.id !== 'en-US') return false
  return true
}

export default async function listByGenre (_root: unknown, args: { genre: string, next?: string }) {
  const ENDPOINT = args?.next ? args.next : `/titles?genre=${args.genre}&info=base_info&sort=year.decr&titleType=movie&endYear=${(new Date().getFullYear())}`
  const { next, results } = await request<MovieListFromAPI>(ENDPOINT)

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
      }
    }
  })

  return {
    next,
    results: movies,
    genre: args.genre
  }
}
