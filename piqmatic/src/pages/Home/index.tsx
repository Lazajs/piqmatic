import Layout from 'src/components/Layout'
import useMovieGenres from 'src/hooks/useMovieGenres'
import MovieSection from 'src/components/MoviesSection'
// import Mobile from 'src/components/MoviesSection/Mobile'

export default function Home () {
  const query = useMovieGenres()

  return (
    <Layout>
      <MovieSection query={query} />
    </Layout>
  )
}
