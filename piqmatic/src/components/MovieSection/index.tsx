// import { useEffect } from 'react'
import { GET_LIST_BY_GENRE } from 'src/services/queries'
import { useQuery } from '@apollo/client'
import type { Movie } from 'types'

interface MovieQuery {
  listByGenre: {
    next: string
    genre: string
    results: Movie[]
  }
}

export default function MovieSection ({ genre }: { genre: string }) {
  const { data, loading, error } = useQuery<MovieQuery>(GET_LIST_BY_GENRE, { variables: { genre } })

  if (error) console.log(error)

  if (!loading && data) {
    const { listByGenre } = data
    const { results } = listByGenre
    return (
      <>
        <h1>{genre}</h1>
        {
          results.map(movie => {
            return <h2 key={movie.id}>{movie.title}</h2>
          })
        }
      </>
    )
  }

  return (
    <h1>JUAS moviesection</h1>
  )
}
