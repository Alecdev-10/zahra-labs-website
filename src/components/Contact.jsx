import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import ToggleBtn from './ToggleBtn'
import styles from './Contact.module.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Où le formulaire délivre. Adresse de test — remettre celle de Zahra Labs en prod.
const FORM_RECIPIENT = 'ibitcam347@gmail.com'
// Adresse publique affichée dans le bloc de coordonnées.
const PUBLIC_EMAIL = 'rachidiabdullahi19950@gmail.com'

// Without EmailJS credentials the form falls back to opening the visitor's
// mail client, so the button always does something real. See .env.example.
const useEmailJs = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const openMailClient = (data) => {
    const subject = `Nouveau projet — ${data.from_name}`
    const body = [
      `Nom : ${data.from_name}`,
      `Email : ${data.from_email}`,
      data.company ? `Entreprise : ${data.company}` : null,
      '',
      data.message,
    ].filter(Boolean).join('\n')
    window.location.href =
      `mailto:${FORM_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const form = formRef.current
    if (!form.reportValidity()) return

    const data = Object.fromEntries(new FormData(form))

    if (!useEmailJs) {
      openMailClient(data)
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const btnLabel = {
    sending: 'Envoi en cours…',
    sent: 'Message envoyé ✓',
    error: 'Échec — réessayer',
    idle: 'Envoyer le message',
  }[status]

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.grid}>

        <Reveal animation="fadeInUp" className={styles.left}>
          <div>
            <p className={`eyebrow ${styles.label}`}>Contact</p>
            <h2 className={styles.h2} id="contact-title">Parlons de votre projet.</h2>
            <p className={styles.desc}>
              Un mot, une idée, un cahier des charges. On revient vers vous sous 48h ouvrées.
            </p>
            <div className={styles.info}>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${PUBLIC_EMAIL}`} className={styles.infoValue}>{PUBLIC_EMAIL}</a>
              </div>
              <div>
                <span className={styles.infoLabel}>Téléphone</span>
                <a href="tel:+22996959690" className={styles.infoValue}>+229 96 95 96 90</a>
              </div>
              <div>
                <span className={styles.infoLabel}>Adresse</span>
                <span className={styles.infoValue}>Abomey-Calavi, Bénin</span>
              </div>
              <div>
                <span className={styles.infoLabel}>RCCM</span>
                <span className={styles.infoValue}>RB/ABC/20 A 20765 — Cotonou (13/08/2020)</span>
              </div>
              <div>
                <span className={styles.infoLabel}>Greffe</span>
                <span className={styles.infoValue}>Tribunal de Commerce de Cotonou</span>
              </div>
              <div>
                <span className={styles.infoLabel}>Dirigeant</span>
                <span className={styles.infoValue}>ABOU Aboudou Rachidi</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal animation="slideInRight" delay={0.2} className={styles.formWrap}>
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            {/* Destination lue par le template EmailJS via {{to_email}} */}
            <input type="hidden" name="to_email" value={FORM_RECIPIENT} />
            <input className={styles.input} type="text"  name="from_name"  placeholder="Votre nom"                     required autoComplete="name" />
            <input className={styles.input} type="email" name="from_email" placeholder="Votre email"                   required autoComplete="email" />
            <input className={styles.input} type="text"  name="company"    placeholder="Votre entreprise (optionnel)"           autoComplete="organization" />
            <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Décrivez votre projet…" required />
            <div>
              <ToggleBtn variant="light" disabled={status === 'sending'}>
                {btnLabel}
              </ToggleBtn>
            </div>
            <p className={styles.status} role="status" aria-live="polite">
              {status === 'sent' && 'Merci ! Nous revenons vers vous sous 48h ouvrées.'}
              {status === 'error' && `Envoi impossible. Écrivez-nous à ${PUBLIC_EMAIL}.`}
            </p>
          </form>
        </Reveal>

      </div>
    </section>
  )
}
