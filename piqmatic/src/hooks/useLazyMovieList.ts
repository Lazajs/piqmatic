import { useEffect } from 'react'
import useGenreList from 'src/hooks/useGenreList'
import useNearScreen from './useNearScreen'

export default function useLazyMovieList (genre: string) {
  const { data, loading, getList, getMoreMovies } = useGenreList()
  const { ref, isIntersecting, disconnect } = useNearScreen()

  useEffect(() => {
    if (isIntersecting) {
      getList({ variables: { genre } }).then(() => { disconnect() })
    }
  }, [isIntersecting])

  return { ref, movies: data?.listByGenre, loading, getList, getMoreMovies }
}
