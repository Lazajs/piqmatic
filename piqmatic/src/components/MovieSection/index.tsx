import Movie from '../Movie'
import Loading from '../Loading'
import useNearScreen from 'src/hooks/useNearScreen'

export default function MovieSection ({ genre }: { genre: string }) {
  const { ref, data, loading } = useNearScreen(genre)

  return (
      <section ref={ref} className='w-full min-h-[240px]'>
        <p className='text-strongGreen text-larger font-roboto font-bold hidden lg:inline-block'>Movies in {genre}</p>
        <small className='ml-smaller text-normal underline'>View all</small>
        <div className='flex overflow-x-scroll snap-x snap-mandatory overscroll-x-contain gap-[1rem] w-[100vw]'>
          {
            !loading && data
              ? data.listByGenre.results.map(movie => <Movie key={movie.id} movie={movie} />)
              : <Loading />
          }
        </div>
      </section>
  )
}
