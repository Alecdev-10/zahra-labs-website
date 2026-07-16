import ToggleBtn from './ToggleBtn'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.shape1} />
        <span className={styles.shape2} />
        <span className={styles.shape3} />
      </div>

      <div className={styles.content}>
        <h1 id="hero-title" className={`${styles.h1} animate-fadeInUp`}>
          Innovation tech,<br />
          conseil et impact,<br />
          depuis le Bénin.
        </h1>
        <p className={`${styles.sub} animate-fadeInUp delay-200`}>
          Nous accompagnons les organisations et les entrepreneurs
          dans leur transformation digitale, leur croissance et leurs
          pratiques durables, grâce à l'expertise, l'innovation
          technologique et la formation.
        </p>
        <div className={`animate-fadeInUp delay-400 ${styles.ctaWrap}`}>
          <ToggleBtn href="#contact" variant="light">Démarrer un projet</ToggleBtn>
        </div>
      </div>
    </section>
  )
}
