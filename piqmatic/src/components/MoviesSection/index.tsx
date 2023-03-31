import Desktop from './Desktop'
import GenreList from '../GenreList'
import Mobile from './Mobile'
import MovieList from '../MovieList'

export default function MovieSection ({ query }: { query: { loading: boolean, data: string[] | undefined } }) {
  const { data, loading } = query

  return (
    <>
      <Desktop loading={loading}>
        {
          data?.map(genre => <GenreList key={genre} genre={genre} />)
        }
      </Desktop>
      <Mobile>
        {
          function ({ data, loading }) {
            console.log(data)

            if (data && !loading) return <MovieList movies={{ results: data }} />
            return <p>Loading...</p>
          }
        }
      </Mobile>
    </>
  )
}
