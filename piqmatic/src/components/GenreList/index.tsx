import Loading from '../Loading'
import useLazyMovieList from 'src/hooks/useLazyMovieList'
import NextMovies from './NextMovies'
import MovieList from '../MovieList'

export default function GenreList ({ genre }: { genre: string }) {
  const { ref, movies, loading, getMoreMovies } = useLazyMovieList(genre)

  const handleClick = () => {
    if (movies?.next) {
      getMoreMovies()
    }
  }

  return (
      <article ref={ref} className='w-full min-h-[240px]'>
        <p className='text-strongGreen text-larger font-roboto font-bold hidden lg:inline-block'>Movies in {genre}</p>
        <small className='ml-smaller text-normal underline hidden lg:inline-block'>View all</small>
        <div className='flex min-h-[210px] flex-col lg:flex-row lg:overflow-x-scroll relative lg:snap-x lg:snap-mandatory lg:overscroll-x-contain lg:gap-[1rem] w-[100vw]'>
          {
            !loading && movies
              ? (
                <>
                  {<MovieList movies={movies} />}
                  <NextMovies onClick={handleClick} />
                </>
                )
              : <Loading />
          }
        </div>
      </article>
  )
}
