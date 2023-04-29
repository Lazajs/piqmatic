import useLazyMovieList from 'src/hooks/useLazyMovieList'
import NextMovies from './NextMovies'
import MovieList from '../MovieList'
import MovieSkeleton from 'src/components/MovieSkeleton'
import { memo } from 'react'

function GenreList ({ genre }: { genre: string }) {
  const { ref, movies, loading, getMoreMovies } = useLazyMovieList(genre)

  return (
      <article ref={ref} className='w-full min-h-[240px]'>
        <p className='text-strongGreen text-larger font-roboto font-bold inline-block'>Movies in {genre}</p>
        <small className='ml-smaller text-normal underline inline-block'>View all</small>
        <div className='flex min-h-[210px] flex-row overflow-x-scroll relative snap-x :snap-mandatory overscroll-x-contain gap-[1rem] w-[100vw]'>
          {
            movies
              ? (
                <>
                  {<MovieList movies={movies}/>}
                  <NextMovies onClick={getMoreMovies} loading={loading} />
                </>
                )
              : Array.from({ length: 5 }).map((_, i) => <MovieSkeleton key={i} />)
          }
        </div>
      </article>
  )
}

export default memo(GenreList, (prevProps, nextProps) => prevProps.genre === nextProps.genre)
