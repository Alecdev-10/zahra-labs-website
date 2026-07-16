import { useState } from 'react'
import Reveal from './Reveal'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: "Quels types de structures ZAHRA LABS accompagne-t-elle ?",
    a: "ZAHRA LABS travaille avec des institutions publiques, des organisations internationales, des entreprises privées, des PME, des startups et des porteurs de projets individuels, en adaptant son approche à chaque contexte.",
  },
  {
    q: "Proposez-vous uniquement des services numériques ?",
    a: "Non. Si le numérique et l'intelligence artificielle constituent un axe fort de notre activité, nous intervenons également en conseil stratégique, accompagnement d'entreprises, ingénierie écologique, économie circulaire et formation.",
  },
  {
    q: "Comment démarrer un projet avec ZAHRA LABS ?",
    a: "Il suffit de nous contacter par téléphone ou par e-mail avec une description, même sommaire, de votre besoin. Un premier échange permet de cadrer le projet avant l'envoi d'une proposition détaillée.",
  },
  {
    q: "Combien de temps dure un projet type ?",
    a: "La durée varie selon la nature et l'ampleur du projet : une étude ponctuelle peut se boucler en quelques semaines, tandis qu'un accompagnement stratégique ou un développement numérique complet peut s'étaler sur plusieurs mois. Un délai indicatif est toujours communiqué dès la phase de proposition.",
  },
  {
    q: "Proposez-vous des formations sur mesure ?",
    a: "Oui. Nos formations peuvent être adaptées aux besoins spécifiques d'une équipe, d'une entreprise ou d'un porteur de projet, en présentiel ou à distance, selon les thématiques et le format souhaités.",
  },
  {
    q: "Assurez-vous un suivi après la livraison d'un projet ?",
    a: "Oui, un accompagnement post-livraison est systématiquement proposé, qu'il s'agisse de support technique, d'ajustements ou d'un dispositif de suivi dans la durée.",
  },
  {
    q: "ZAHRA LABS est-elle une entreprise légalement enregistrée ?",
    a: "Oui. ZAHRA LABS est immatriculée au Registre du Commerce et du Crédit Mobilier de Cotonou sous le numéro RB/ABC/20 A 20765, depuis le 13 août 2020.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="section-title" id="faq-title">
            Tout ce qu'on nous demande souvent.
          </h2>
        </div>
      </Reveal>

      <Reveal animation="fadeInUp" delay={0.2}>
        <div className={styles.dashedFrame}>
          {faqs.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
              <button
                className={styles.q}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={styles.chevron} aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className={styles.a} role="region">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
