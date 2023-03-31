import { useQuery } from '@apollo/client'
import { GET_GENRES } from 'src/services/queries'

interface GenreQuery {
  genres: string[]
}

export default function useMovieGenres () {
  const { data, loading, error } = useQuery<GenreQuery>(GET_GENRES)

  if (error) console.log('Error fetching genres: ', error.message)

  return { data: data?.genres, loading }
}
