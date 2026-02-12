import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, focus, description }) => {
  return (
    <div className={styles.card}>
      {/* Tapes */}
      <div className={styles.tapeLeft}></div>
      <div className={styles.tapeRight}></div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
