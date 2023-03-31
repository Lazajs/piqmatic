import Movie from '../Movie'
import { type Movie as TMovie } from 'types'

export default function MovieList ({ movies }: { movies: { results: TMovie[] } }) {
  return (
    <>
      {movies.results.map(movie => <Movie key={movie.id} movie={movie} />)}
    </>
  )
}
