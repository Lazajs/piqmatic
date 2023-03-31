import { useRef, useEffect, useState } from 'react'

export default function useNearScreen () {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [observer, setObserver] = useState<IntersectionObserver>()

  const disconnect = () => { observer?.unobserve(ref.current as Element) && observer?.disconnect() }

  useEffect(() => {
    const onChange = (entries: any[]) => {
      const element = entries[0]
      setIsIntersecting(element.isIntersecting)
    }

    const observerInstance = new IntersectionObserver(onChange, {
      rootMargin: '50px'
    })

    if (ref?.current) observerInstance.observe(ref.current)

    setObserver(observer ?? observerInstance)

    return () => { disconnect() }
  }, [ref.current])

  return { ref, isIntersecting, disconnect }
}
