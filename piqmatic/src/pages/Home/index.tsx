import Layout from 'src/components/Layout'
import useMovieGenres from 'src/hooks/useMovieGenres'
import MovieSection from 'src/components/MoviesSection'
import Navbar from 'src/components/Navbar'

export default function Home () {
  const { data, loading } = useMovieGenres()

  return (
    <Layout>
      <Navbar />

      {!loading && <MovieSection query={data} />}
    </Layout>
  )
}
