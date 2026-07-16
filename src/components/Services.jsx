import Reveal from './Reveal'
import styles from './Services.module.css'

const services = [
  { n: '01', title: 'Études stratégiques',        desc: "Réalisation d'études stratégiques, d'audits organisationnels et d'expertises sectorielles." },
  { n: '02', title: 'Ingénierie de projets',      desc: 'Montage, structuration et évaluation de projets pour entités publiques, privées ou internationales.' },
  { n: '03', title: 'Accompagnement entreprises', desc: 'Conseil en organisation, gestion et développement des entreprises.' },
  { n: '04', title: 'Coaching & incubation',      desc: "Coaching de dirigeants et d'équipes, incubation et accélération de startups, PME et porteurs de projets." },
  { n: '05', title: 'Plateformes numériques',     desc: 'Conception, développement et intégration de solutions et plateformes numériques.' },
  { n: '06', title: 'Solutions IA',               desc: "Développement d'outils et d'applications basés sur l'intelligence artificielle." },
  { n: '07', title: 'Applications logistiques',   desc: 'Applications logistiques et outils métiers sur mesure.' },
  { n: '08', title: 'R&D technologique',          desc: "Recherche et développement technologique appliqué aux besoins des organisations." },
  { n: '09', title: 'Ingénierie écologique',      desc: 'Conseil, étude et mise en œuvre de solutions innovantes et éco-responsables.' },
  { n: '10', title: 'AgriTech & énergie',         desc: 'Agriculture durable (AgriTech), valorisation des déchets et transition énergétique.' },
  { n: '11', title: 'HealthTech',                 desc: 'Développement de solutions numériques appliquées au secteur de la santé et outils de gestion pour structures sanitaires.' },
  { n: '12', title: 'Formation',                  desc: 'Formation continue en transformation digitale, IA appliquée, entrepreneuriat et pratiques éco-responsables.' },
]

export default function Services() {
  return (
    <section className={styles.section} id="services" aria-labelledby="svc-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className={`eyebrow ${styles.eyebrowLight}`}>Catalogue</p>
          <h2 className={`section-title ${styles.sectionTitle}`} id="svc-title">Services proposés.</h2>
        </div>
      </Reveal>

      <div className={styles.grid} role="list">
        {services.map((s, i) => (
          <Reveal key={s.n} animation="popIn" delay={0.06 * i} threshold={0.05}>
            <div className={styles.card} role="listitem">
              <p className={styles.num}>{s.n}</p>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
