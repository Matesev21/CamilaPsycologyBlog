import React from "react";
import styles from "./StickyNotes.module.css";
import AnsiedadEmoji from "../../Images/AnsiedadEmoji.svg";
import AutoestimaEmoji from "../../Images/AutoestimaEmoji.svg";
import VinculosEmoji from "../../Images/VinculosEmoji.svg";

const StickyNotes = () => {
  const services = [
    {
      title: "Ansiedad y Estrés",
      emoji: AnsiedadEmoji,
      description: "Herramientas para recuperar tu calma.",
    },
    {
      title: "Autoestima",
      emoji: AutoestimaEmoji,
      description: "Reconecta con tu valor personal.",
    },
    {
      title: "Vínculos",
      emoji: VinculosEmoji,
      description: "Sana la forma en que te relacionas.",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <span className={styles.emoji}>
              <img src={service.emoji} alt="emoji" />
            </span>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyNotes;
