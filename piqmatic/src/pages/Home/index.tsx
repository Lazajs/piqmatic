import { useQuery } from '@apollo/client/react'
import { GET_GENRES } from 'src/services/queries'
import MovieSection from 'src/components/MovieSection'

interface GenreQuery {
  genres: string[]
}

export default function Home () {
  const { data, loading, error } = useQuery<GenreQuery>(GET_GENRES)
  if (error) console.log(error)

  if (data && !loading) {
    const { genres } = data
    return (
      <>
        {
          genres.map(genre => {
            return <MovieSection key={genre} genre={genre}/>
          })
        }
      </>
    )
  }

  return (
    <h1>LOL</h1>
  )
}
