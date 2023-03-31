import { useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_LIST_BY_GENRE } from 'src/services/queries'
import type { Movie } from 'types'

interface MovieQuery {
  listByGenre: {
    next: string
    genre: string
    results: Movie[]
  }
}

export default function useGenreList () {
  const [getList, { data, loading, error, fetchMore }] = useLazyQuery<MovieQuery>(GET_LIST_BY_GENRE)

  if (error) console.log('Error fetching genre list: ', error.message)

  const getMoreMovies = useCallback(async () => await fetchMore({ variables: { next: data?.listByGenre.next } }), [data?.listByGenre.next])

  return { data, loading, getList, getMoreMovies }
}
