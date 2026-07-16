import { useEffect, useState, useRef } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#expertise', label: 'Pôles' },
  { href: '#services',  label: 'Services' },
  { href: '#impact',    label: 'Impact' },
  { href: '#equipe',    label: 'À propos' },
  { href: '#contact',   label: 'Nous contacter' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      if (open) return
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  return (
    <div ref={navRef}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`} aria-label="Navigation principale">
        <a href="#" className={styles.logo} aria-label="Zahra Labs — accueil">
          ZAHRA <em>LABS</em>
        </a>

        <ul className={styles.links} role="list">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
        </button>
      </nav>

      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
        <ul role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.dropCta} onClick={() => setOpen(false)}>
          Démarrer un projet
        </a>
      </div>
    </div>
  )
}
