import { useEffect, useRef, useState } from 'react'

export default function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: reveal after 1.5s if IntersectionObserver never fires (e.g. SSR, bots)
    const fallback = setTimeout(() => setIsInView(true), 1500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback)
          setIsInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => {
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [threshold, once])

  return { ref, isInView }
}
