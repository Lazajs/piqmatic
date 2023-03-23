import type { Movie, MovieListFromAPI } from 'types'
import request from '../request.js'

export default async function listByGenre (_root: unknown, args: { genre: string, next?: string }) {
  const ENDPOINT = args?.next ? args.next : `/titles?genre=${args.genre}`
  const { next, results } = await request<MovieListFromAPI>(ENDPOINT)

  const movies: Movie[] = results.filter(movie => movie.primaryImage?.url !== undefined).map(movie => {
    return {
      id: movie.id,
      image: {
        url: movie.primaryImage.url,
        caption: movie.primaryImage.caption.plainText
      },
      type: movie.titleType.text,
      title: movie.titleText.text,
      release: movie.releaseYear.year
    }
  })

  return {
    next,
    results: movies,
    genre: args.genre
  }
}
