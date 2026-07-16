import Reveal from './Reveal'
import styles from './Banner.module.css'

const tags = ['Innovation', 'Bénin', 'HealthTech', 'AgriTech', 'Digital', 'Impact', 'Tech', 'Conseil', 'IA']

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.ticker} aria-hidden="true">
        <span className={styles.tickerRow}>
          {[...tags, ...tags, ...tags].map((t, i) => (
            <span key={i} className={styles.tag}>{t}</span>
          ))}
        </span>
      </div>

      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={styles.dot} style={{ '--i': i }} />
        ))}
      </div>

      <Reveal animation="fadeInUp">
        <div className={styles.content}>
          <p>La tech béninoise qui accélère les terrains,<br />du diagnostic à l'impact mesuré.</p>
          <span className={styles.accentLine} aria-hidden="true" />
        </div>
      </Reveal>
    </div>
  )
}
