import { useRef, useEffect, useState } from 'react'

export default function useNearScreen () {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    const element = entries[0]
    console.log(element)
    if (element.isIntersecting) {
      setIsIntersecting(true)
      observer.disconnect()
    }
  }

  useEffect(() => {
    let disconnect = () => {}

    if (ref?.current) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '50px'
      })
      disconnect = () => { observer.disconnect() }
      observer.observe(ref.current)
    }
    return () => { disconnect() }
  }, [ref.current])

  return { ref, isIntersecting }
}
