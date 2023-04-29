import { useLazyQuery } from '@apollo/client'
import { type Movie } from 'types'
import { GET_DETAIL } from 'src/services/queries'

interface DetailQuery {
  movieById: Movie
}

export default function useDetail () {
  const [getDetail, { data, loading, error }] = useLazyQuery<DetailQuery>(GET_DETAIL)

  if (error) console.log('Error fetching detail: ', error.message)

  const getMovieDetail = (id: string) => {
    getDetail({ variables: { id } })
  }

  return { getMovieDetail, data, loading }
}
