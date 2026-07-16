import styles from './ToggleBtn.module.css'

/**
 * The pill/toggle CTA button — text left, circular arrow right.
 * variant: 'dark' (dark bg, white circle) | 'light' (gold bg, dark circle)
 */
export default function ToggleBtn({ children, href = '#', variant = 'dark', onClick }) {
  const cls = `${styles.btn} ${styles[variant]}`
  const circle = (
    <span className={styles.circle} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )

  if (href) {
    return (
      <a href={href} className={cls}>
        <span className={styles.label}>{children}</span>
        {circle}
      </a>
    )
  }

  return (
    <button type="submit" className={cls} onClick={onClick}>
      <span className={styles.label}>{children}</span>
      {circle}
    </button>
  )
}
