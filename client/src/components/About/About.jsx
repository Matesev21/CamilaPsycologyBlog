import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.photoColumn}>
        <img
          src="https://placehold.co/350x400"
          alt="Camila Navas"
          className={styles.polaroid}
        />
      </div>
      <div className={styles.textColumn}>
        <h2 className={styles.title}>Sobre Mí</h2>
        <p className={styles.paragraph}>
          Hola!, soy Camila Navas. Psicóloga Clínica con dominio de contenidos y
          habilidades para la evaluación, diagnóstico y abordaje psicológico.
        </p>
        <p className={styles.paragraph}>
          Tengo experiencia en psicoterapia individual, brindando apoyo
          emocional a individuos afectados por problemas de salud, así como
          acompañamiento en procesos de duelo y duelo anticipado, aplicando
          habilidades empáticas y enfoques terapéuticos centrados en el
          paciente.
        </p>
        <p className={styles.paragraph}>
          Mi objetivo es crear un espacio seguro donde puedas ser tú
          mismo/a.Acompañamiento psicológico online, cercano y humano.
        </p>
        <p className={styles.paragraph}>
          Creo firmemente en{" "}
          <span className={styles.highlight}>desestigmatizar la terapia</span>.
          No se trata de 'arreglarte', sino de entenderte.
        </p>
      </div>
    </section>
  );
};

export default About;
