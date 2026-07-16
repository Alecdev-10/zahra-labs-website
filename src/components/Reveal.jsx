import useInView from '../hooks/useInView'
import styles from './Reveal.module.css'

/**
 * Wrapper that reveals its children with an animation when scrolling into view.
 * animation: 'fadeInUp' | 'fadeIn' | 'popIn' | 'slideInLeft' | 'slideInRight'
 */
export default function Reveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.15,
  className = '',
}) {
  const { ref, isInView } = useInView({ threshold, once: true })

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[animation]} ${isInView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
