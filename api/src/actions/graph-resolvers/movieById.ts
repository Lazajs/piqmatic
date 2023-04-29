import type { Movie, MovieFromAPI } from 'types'
import request from '../request.js'

export default async function movieById (root, args: { id: string }) {
  const { id } = args
  const ENDPOINT = `/titles/${id}?info=base_info`
  const { results: movie } = await request<{ results: MovieFromAPI }>(ENDPOINT)
  const result: Omit<Movie, 'director'> = {
    id: movie.id,
    image: {
      url: movie.primaryImage.url,
      caption: movie.primaryImage.caption.plainText
    },
    type: movie.titleType.text,
    title: movie.titleText.text,
    release: movie.releaseYear.year,
    ratingData: {
      current: movie.ratingsSummary.aggregateRating || 0,
      votes: movie.ratingsSummary.voteCount
    },
    genres: movie.genres.genres.map(genre => genre.text),
    description: movie.plot.plotText.plainText,
    duration: movie.runtime?.displayableProperty?.value?.plainText || null
  }

  return result
}
