import usePageMovieList from 'src/hooks/usePageMoveList'
import NextMovies from './NextMovies'
import type { Movie } from 'types'

export default function Mobile ({ children }: { children: (props: { loading: boolean, data: Movie[] | undefined }) => JSX.Element }) {
  const { data, loading, getListByPage, loadMore } = usePageMovieList()

  return (
    <section className="lg:hidden flex">
        <div className='flex min-h-[210px] flex-col lg:flex-row lg:overflow-x-scroll relative lg:snap-x lg:snap-mandatory lg:overscroll-x-contain lg:gap-[1rem] w-[100vw]'>
          {children({ loading, data })}
          <NextMovies getMovies={getListByPage} getMore={loadMore} loading={loading} />
        </div>
    </section>
  )
}
