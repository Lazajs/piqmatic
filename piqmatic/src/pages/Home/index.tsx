import MovieSection from 'src/components/MovieSection'
import useMovieGenres from 'src/hooks/useMovieGenres'
import Nav from 'src/components/Nav'

export default function Home () {
  const { data, loading, error } = useMovieGenres()

  if (error) console.log(error)

  if (data && !loading) {
    const { genres } = data
    return (
      <>
        <Nav />
        <article className='flex flex-col lg:gap-[3rem]'>
          {
            genres.map(genre => {
              return <MovieSection key={genre} genre={genre}/>
            })
          }
        </article>
      </>
    )
  }

  return (
    <h1>LOADING</h1>
  )
}
