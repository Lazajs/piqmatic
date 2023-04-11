import { useRef, useEffect, useState } from 'react'

export default function useNearScreen () {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState<boolean | 'disconnected'>(false)

  const onChange = (entries: any[]) => {
    const element = entries[0]
    setIsIntersecting(prev => prev === 'disconnected' ? prev : element.isIntersecting)
  }

  const observer = new IntersectionObserver(onChange, {
    rootMargin: '50px'
  })

  const disconnect = () => {
    observer.disconnect()
    setIsIntersecting('disconnected')
  }

  useEffect(() => {
    if (ref?.current) observer.observe(ref.current)

    return () => { disconnect() }
  }, [ref.current])

  return { ref, isIntersecting, disconnect }
}
