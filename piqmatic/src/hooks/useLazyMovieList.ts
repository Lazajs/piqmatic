import { useEffect, useRef } from 'react'
import useGenreList from 'src/hooks/useGenreList'

export default function useLazyMovieList (genre: string) {
  const { data, loading, getList } = useGenreList()

  const ref = useRef<any>()

  useEffect(() => {
    console.log(data?.listByGenre)
    const element = ref.current
    const onChange = (entries: any[]) => {
      const el = entries[0]
      if (el.isIntersecting && !data?.listByGenre) {
        observer.unobserve(element as Element)
        getList({ variables: { genre } })
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    if (ref.current && !data?.listByGenre) {
      observer.observe(element as Element)
    }

    return () => { observer.disconnect() }
  }, [ref.current])

  return { ref, data, loading, getList }
}
