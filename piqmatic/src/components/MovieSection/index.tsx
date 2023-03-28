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

  if (error) console.log(error.message, genre)

  if (!loading && data) {
    const { listByGenre } = data
    const { results } = listByGenre

    return (
      <section className='w-full min-h-[240px]'>
        <p className='text-strongGreen text-larger font-roboto font-bold hidden lg:inline-block'>Movies in {genre}</p>
        <small className='ml-smaller text-normal underline'>View all</small>
        <div className='flex overflow-x-scroll snap-x snap-mandatory overscroll-x-contain gap-[1rem] w-[100vw]'>
          {
            results.map(movie => <Movie key={movie.id} movie={movie} />)
          }
        </div>
      </section>
    )
  }

  return <Loading />
}
