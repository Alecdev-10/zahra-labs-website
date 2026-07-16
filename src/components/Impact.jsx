import CountUp from './CountUp'
import Reveal from './Reveal'
import styles from './Impact.module.css'

const stats = [
  { n: '3',   suffix: '',   label: "Pôles d'expertise" },
  { n: '12',  suffix: '+',  label: 'Services proposés' },
  { n: '100', suffix: '%',  label: 'Ancrage Bénin' },
  { n: '24',  suffix: '/7', label: 'Engagement client' },
]

const sectors = ['Santé', 'Agriculture', 'Énergie', 'Logistique', 'Éducation', 'Finance', 'Administration publique', 'ONG']

export default function Impact() {
  return (
    <section className={styles.section} id="impact" aria-labelledby="impact-title">
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.orb1} />
        <span className={styles.orb2} />
      </div>

      <div className={styles.inner}>
        <Reveal animation="fadeInUp">
          <div className={styles.header}>
            <p className={`eyebrow ${styles.eyebrowLight}`}>Impact</p>
            <h2 className={`section-title ${styles.sectionTitle}`} id="impact-title">
              Notre impact en quelques chiffres.
            </h2>
          </div>
        </Reveal>

        <div className={styles.stats} role="list">
          {stats.map((s, i) => (
            <Reveal key={s.label} animation="popIn" delay={0.1 * i} threshold={0.1}>
              <div className={styles.stat} role="listitem">
                <p className={styles.statN}>
                  <CountUp value={s.n} />
                  {s.suffix && <span className={styles.suffix}>{s.suffix}</span>}
                </p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fadeInUp" delay={0.4} threshold={0.1}>
          <div className={styles.sectors} aria-hidden="true">
            <div className={styles.track}>
              {[...sectors, ...sectors, ...sectors].map((item, i) => (
                <span key={i} className={styles.sector}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  )
}
