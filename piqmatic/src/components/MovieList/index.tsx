import Movie from '../Movie'
import { type Movie as TMovie } from 'types'
import { memo } from 'react'

function MovieList ({ movies }: { movies: { results: TMovie[] } }) {
  return (
    <>
      {movies.results.map((movie, i) => <Movie key={movie.id + i} movie={movie} />)}
    </>
  )
}

export default memo(MovieList, (prevProps, nextProps) => prevProps.movies.results.length === nextProps.movies.results.length)
