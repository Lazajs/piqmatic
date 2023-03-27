// import { useEffect } from 'react'
import { GET_LIST_BY_GENRE } from 'src/services/queries'
import { useQuery } from '@apollo/client'
import type { Movie as TMovie } from 'types'
import Movie from '../Movie'
import Loading from '../Loading'

interface MovieQuery {
  listByGenre: {
    next: string
    genre: string
    results: TMovie[]
  }
}

export default function MovieSection ({ genre }: { genre: string }) {
  const { data, loading, error } = useQuery<MovieQuery>(GET_LIST_BY_GENRE, { variables: { genre } })

  if (error) console.log(error.message)

  if (!loading && data) {
    const { listByGenre } = data
    const { results } = listByGenre

    return (
      <section>
        <h2 className='text-strongGreen text-larger font-roboto font-bold hidden lg:block'>{genre}</h2>
        {
          results.map(movie => <Movie key={movie.id} movie={movie} />)
        }
      </section>
    )
  }

  return <Loading />
}
