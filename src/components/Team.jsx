import styles from "./Team.module.css";

const members = [
  {
    name: "Membre équipe",
    role: "CTO · Tech & Innovation",
    initials: "CT",
    email: "cto@zahralabs.com",
    av: "av1",
    tilt: "tiltLeft",
  },
  {
    name: "ABOU Aboudou Rachidi",
    role: "Fondateur · CEO",
    initials: "AR",
    email: "rachidi@zahralabs.com",
    av: "av2",
    tilt: "",
    founder: true,
  },
  {
    name: "Membre équipe",
    role: "COO · Opérations",
    initials: "CO",
    email: "coo@zahralabs.com",
    av: "av3",
    tilt: "tiltRight",
  },
];

export default function Team() {
  return (
    <section
      className={styles.section}
      id="equipe"
      aria-labelledby="team-title"
    >
      <div className={styles.layout}>
        <div className={styles.left}>
          <h2 className={styles.hl} id="team-title">
            Équipe dynamique, nous sommes attentifs sur le terrain avec la main
            dans le code pour satisfaire les clients.
          </h2>
          <p className={styles.desc}>
            ZAHRA LABS est une entreprise béninoise immatriculée au Registre du
            Commerce et du Crédit Mobilier de Cotonou, spécialisée dans les
            prestations de services liées aux technologies de l'information et de
            la communication. Fondée sur une double exigence de rigueur
            méthodologique et d'innovation continue, ZAHRA LABS conçoit, développe
            et déploie des solutions et des accompagnements sur mesure au bénéfice
            des institutions publiques, des entreprises privées, des organisations
            internationales, des porteurs de projets et des startups.
          </p>
          <p className={styles.contact}>
            Qui pouvez-vous directement contacter&nbsp;?
          </p>
        </div>

        <div className={styles.cards}>
          {members.map((m) => (
            <div
              key={m.name + m.role}
              className={`
                ${styles.card}
                ${m.tilt ? styles[m.tilt] : ""}
                ${m.founder ? styles.founder : ""}
              `}
            >
              <div
                className={`${styles.avatar} ${styles[m.av]}`}
                role="img"
                aria-label={m.name}
              >
                <span>{m.initials}</span>
              </div>
              <h5>{m.name}</h5>
              <span className={styles.role}>{m.role}</span>
              <a href={`mailto:${m.email}`} className={styles.email}>
                {m.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
