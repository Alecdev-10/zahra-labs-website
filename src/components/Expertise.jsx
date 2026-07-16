import Reveal from './Reveal'
import styles from './Expertise.module.css'

const cards = [
  {
    num: '01',
    title: 'Tech & Innovation',
    subtitle: "Technologies de l'information et de la communication.",
    desc: "Innovation technologique, transformation digitale et R&D. Conception et déploiement de plateformes numériques, d'applications logistiques, de solutions IA et de formations aux outils numériques.",
    visual: styles.ev1,
  },
  {
    num: '02',
    title: 'Conseil & Accompagnement',
    subtitle: 'Accompagnement stratégique et opérationnel.',
    desc: "Études, audits, ingénierie de projets et montage de dossiers. Coaching, incubation, accélération et formation de dirigeants, équipes, PME, startups et porteurs de projets.",
    visual: styles.ev2,
  },
  {
    num: '03',
    title: 'HealthTech & AgriTech',
    subtitle: "Pôles d'avenir et économie circulaire.",
    desc: "Ingénierie écologique, économie circulaire, AgriTech, transition énergétique et technologies de la santé. Développement d'outils de gestion et d'innovations numériques pour structures sanitaires.",
    visual: styles.ev3,
  },
]

export default function Expertise() {
  return (
    <section className={styles.section} id="expertise" aria-labelledby="exp-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className="eyebrow">Nos pôles</p>
          <h2 className="section-title" id="exp-title">
            Trois expertises, un seul cap :<br />l'impact mesuré.
          </h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <Reveal key={c.num} animation="popIn" delay={0.15 * i} threshold={0.1}>
            <article className={styles.card}>
              <div className={`${styles.visual} ${c.visual}`} role="img" aria-label={c.title} />
              <div className={styles.body}>
                <span className={styles.num}>{c.num}</span>
                <h3>{c.title}</h3>
                <p className={styles.subtitle}>{c.subtitle}</p>
                <p className={styles.desc}>{c.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
