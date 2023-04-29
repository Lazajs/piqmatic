import Layout from 'src/components/Layout'
import useMovieGenres from 'src/hooks/useMovieGenres'
import MovieSection from 'src/components/MoviesSection'
import Navbar from 'src/components/Navbar'
import Loading from 'src/components/Loading'

export default function Home () {
  const { data, loading } = useMovieGenres()

  return (
    <Layout>
      <Navbar />
      {loading
        ? <span className='grid w-full h-full place-content-center'>
            <Loading />
            <p className='text-mediumGreen font-bold text-large'>loading your movies</p>
        </span>
        : <MovieSection query={data} />}
    </Layout>
  )
}
