import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.paper}>
        {/* The 4 Washi Tapes */}
        <div className={`${styles.tape} ${styles.topLeft}`}></div>
        <div className={`${styles.tape} ${styles.topRight}`}></div>
        <div className={`${styles.tape} ${styles.bottomLeft}`}></div>
        <div className={`${styles.tape} ${styles.bottomRight}`}></div>

        {/* Content */}
        <h2 className={styles.title}>Sobre Mí</h2>

        <p className={styles.paragraph}>
          Hola, soy Camila. Mi objetivo es crear un espacio seguro donde puedas
          ser tú mismo/a.
        </p>

        <p className={styles.paragraph}>
          Creo firmemente en{" "}
          <span className={styles.highlight}>desestigmatizar la terapia</span>.
          No se trata de 'arreglarte', sino de entenderte.
        </p>

        <p className={styles.paragraph}>
          Acompañamiento psicológico online, cercano y humano.
        </p>
      </div>
    </section>
  );
};

export default About;
