import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

export default function CountUp({ value, suffix = '', duration = 1500 }) {
  const { ref, isInView } = useInView({ threshold: 0.3, once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const num = parseInt(value, 10)
    if (Number.isNaN(num)) {
      setDisplay(value)
      return
    }

    let startTime = null
    let raf

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.floor(ease * num).toString())
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
