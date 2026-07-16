import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Pôles',
    links: [
      { href: '#expertise', label: 'Tech & Innovation' },
      { href: '#expertise', label: 'Conseil & Accompagnement' },
      { href: '#expertise', label: 'HealthTech & AgriTech' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { href: '#services', label: 'Plateformes numériques' },
      { href: '#services', label: 'Solutions IA' },
      { href: '#services', label: 'Audits techniques' },
      { href: '#services', label: 'Coaching & incubation' },
    ],
  },
  {
    heading: 'Maison',
    links: [
      { href: '#equipe',  label: 'À propos' },
      { href: '#impact',  label: 'Impact' },
      { href: '#methode', label: 'Comment ça marche' },
      { href: '#atouts',  label: 'Nos atouts' },
    ],
  },
]

const socials = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'X' },
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.logo}>ZAHRA <em>LABS</em></p>
          <p className={styles.tagline}>Études, conseil, innovation technologique et formation. Basée à Abomey-Calavi, Bénin.</p>
          <p className={styles.legal}>RCCM RB/ABC/20 A 20765 — Cotonou · Depuis 2020</p>
        </div>
        {cols.map((col) => (
          <div key={col.heading} className={styles.col}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span>© 2026 ZAHRA LABS · Cotonou, Bénin.</span>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a key={s.label} href={s.href}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
