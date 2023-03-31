import { GET_LIST_BY_PAGE } from 'src/services/queries'
import { useLazyQuery } from '@apollo/client'
import { useCallback } from 'react'
import { type Movie } from 'types'

interface PageQuery {
  listByPage: {
    next?: string
    results: Movie[]
  }
}

export default function usePageMovieList () {
  const [getListByPage, { data, loading, error, fetchMore }] = useLazyQuery<PageQuery>(GET_LIST_BY_PAGE)

  if (error) console.log('Error fetching list by page', error.message)

  const loadMore = useCallback(() => {
    if (data?.listByPage?.next) {
      fetchMore({
        variables: {
          next: data.listByPage.next
        }
      })
    }
  }, [data?.listByPage?.next])

  return {
    getListByPage,
    data: data?.listByPage?.results,
    loading,
    loadMore
  }
}
