import React from "react";
import styles from "./Hero.module.css";
import CamiImg from "../../Images/CamiNavasProfile.png";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Tu bienestar es lo </h1>
        <h1 className={styles.title}>
          <span className={styles.highlight}>PRIMERO</span>.
        </h1>
        <span className={styles.subtitle}>
          Acompañamiento psicológico online, cercano y humano.
        </span>
        <br></br>
        <button className={styles.ctaBtn}>Empieza Aquí</button>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.photoWrapper}>
          <img src={CamiImg} alt="Camila Psychology Session" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
