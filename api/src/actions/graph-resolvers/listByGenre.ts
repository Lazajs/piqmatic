import type { Movie, MovieFromAPI, MovieListFromAPI } from 'types'
import request from '../request.js'

const filterResults = (movie: MovieFromAPI) => {
  if (movie.primaryImage?.url === undefined ||
    movie.plot?.language?.id !== 'en-US') return false
  return true
}

interface Args {
  genre: string
  next?: string
}

export default async function listByGenre (_root: unknown, args: Args) {
  const ENDPOINT = args?.next ? args.next : `/titles?genre=${args.genre}&info=base_info&sort=year.decr&endYear=${new Date().getFullYear()}&titleType=movie`
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
      },
      genres: movie.genres.genres.map(genre => genre.text)
    }
  })

  if (movies.length < 9 && !args?.next) { // If there are less than 10 movies in the first request, get more movies
    const { next: next2, results: results2 } = await request<MovieListFromAPI>(next)

    const movies2 = results2.filter(filterResults).map(movie => {
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
    })
    return {
      next: next2,
      results: movies.concat(movies2),
      genre: args.genre
    }
  }

  return {
    next,
    results: movies,
    genre: args.genre
  }
}
