import { useEffect } from 'react'
import useGenreList from 'src/hooks/useGenreList'
import useNearScreen from './useNearScreen'

export default function useLazyMovieList (genre: string) {
  const { data, loading, getList, getMoreMovies } = useGenreList()
  const { ref, isIntersecting } = useNearScreen()

  useEffect(() => {
    if (isIntersecting) {
      getList({ variables: { genre } }).then(() => { console.log('done') })
    }
  }, [isIntersecting])

  return { ref, movies: data?.listByGenre, loading, getList, getMoreMovies }
}
