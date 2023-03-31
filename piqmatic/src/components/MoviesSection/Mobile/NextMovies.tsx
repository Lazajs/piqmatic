import useNearScreen from 'src/hooks/useNearScreen'
import { useEffect } from 'react'
import { type Movie } from 'types'
import { type LazyQueryExecFunction, type OperationVariables } from '@apollo/client'
import Loading from 'src/components/Loading'

interface PageQuery {
  listByPage: {
    next?: string
    results: Movie[]
  }
}

export default function NextMovies ({ getMovies, getMore, loading }: { loading: boolean, getMovies: LazyQueryExecFunction<PageQuery, OperationVariables>, getMore: () => void }) {
  const { isIntersecting, ref } = useNearScreen()

  useEffect(() => {
    if (isIntersecting) getMore()
  }, [isIntersecting])

  useEffect(() => {
    getMovies()
  }, [])

  const border = loading ? '' : 'border-[1px] border-solid border-black'

  return <div ref={ref} className={`w-full snap-start gap-[1rem] shrink-0 h-[20rem] min-w-minMobile lg:w-[400px] p-small flex ${border}`}>
    <Loading />
  </div>
}
