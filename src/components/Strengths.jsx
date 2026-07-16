import Reveal from './Reveal'
import styles from './Strengths.module.css'

const strengths = [
  {
    title: 'Pluridisciplinarité',
    desc: "Une capacité à intervenir simultanément sur les volets conseil, technologique, écologique et sanitaire d'un même projet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: 'Ancrage local, vision internationale',
    desc: "Une bonne connaissance du contexte béninois et sous-régional, associée à des standards de travail rigoureux.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Veille technologique continue',
    desc: "Une adaptation permanente aux évolutions de l'intelligence artificielle, du numérique et des pratiques durables.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
  },
  {
    title: 'Accompagnement de bout en bout',
    desc: "De l'étude préalable à la mise en œuvre, jusqu'au suivi post-livraison.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
      </svg>
    ),
  },
  {
    title: 'Approche sur mesure',
    desc: "Des solutions adaptées à la taille et aux moyens de chaque structure, des porteurs de projets aux organisations internationales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
        <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
        <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
        <line x1="17" y1="16" x2="23" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Transfert de compétences',
    desc: "Une volonté constante de former et de rendre les équipes clientes autonomes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function Strengths() {
  return (
    <section className={styles.section} id="atouts" aria-labelledby="strengths-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className="eyebrow">Nos points forts</p>
          <h2 className="section-title" id="strengths-title">
            Ce qui fait la différence.
          </h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {strengths.map((s, i) => (
          <Reveal key={s.title} animation="popIn" delay={0.08 * i} threshold={0.1}>
            <div className={styles.card}>
              <div className={styles.icon} aria-hidden="true">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
