import Layout from 'src/components/Layout'
import useMovieGenres from 'src/hooks/useMovieGenres'
import MovieSection from 'src/components/MoviesSection'

export default function Home () {
  const { data, loading } = useMovieGenres()

  return (
    <Layout>
      {!loading && <MovieSection query={data} />}
    </Layout>
  )
}
