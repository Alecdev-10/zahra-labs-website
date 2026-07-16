import Reveal from './Reveal'
import styles from './Method.module.css'

const steps = [
  {
    n: '01',
    title: 'Prise de contact',
    desc: "Réception de la demande et premier échange pour comprendre le contexte, les objectifs et les contraintes du projet.",
  },
  {
    n: '02',
    title: 'Cadrage et analyse',
    desc: "Analyse approfondie du besoin, diagnostic si nécessaire, définition du périmètre, des livrables, des délais et des ressources.",
  },
  {
    n: '03',
    title: 'Proposition et validation',
    desc: "Élaboration d'une proposition technique et financière détaillée, ajustements avec le client et validation formelle avant démarrage.",
  },
  {
    n: '04',
    title: 'Exécution et suivi',
    desc: "Réalisation des travaux selon un plan d'action précis, points d'étape réguliers, livrables intermédiaires et ajustements.",
  },
  {
    n: '05',
    title: 'Livraison et validation',
    desc: "Remise des livrables finaux, tests et vérifications, puis validation conjointe avec le client.",
  },
  {
    n: '06',
    title: 'Accompagnement post-projet',
    desc: "Suivi de la mise en œuvre, support technique, ajustements éventuels et maintenance dans la durée si besoin.",
  },
]

export default function Method() {
  return (
    <section className={styles.section} id="methode" aria-labelledby="method-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className="eyebrow">Méthode</p>
          <h2 className="section-title" id="method-title">De la réception du projet à sa finalisation.</h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {steps.map((s) => (
          <div key={s.n} className={styles.step}>
            <p className={styles.num}>{s.n}</p>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
