import React from "react";
import styles from "./ServiceModality.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// Using inline SVG for checkmarks to match previous style

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="12"
      strokeWidth="2"
      fill="rgba(60, 113, 31, 0.7)"
    />
    <path
      d="M7 12L10.5 15.5L17 9"
      stroke="#ffffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceModality = () => {
  return (
    <section className={styles.section}>
      <div className={styles.paperCard}>
        {/* Pin Element */}
        <div className={styles.pin}></div>

        <div className={styles.bodyContent}>
          <h2 className={styles.title}>Modalidad de Atención</h2>
          <p className={styles.subtitle}>
            Conoce cómo adapto cada sesión a tu ritmo y necesidades.
          </p>

          <div className={styles.iconsGrid}>
            <div className={styles.iconItem}>
              <CheckIcon />
              <span>Sesiones Online</span>
            </div>
            <div className={styles.iconItem}>
              <CheckIcon />
              <span>Duración: 45-50 min</span>
            </div>
            <div className={styles.iconItem}>
              <CheckIcon />
              <span>Atencion Bajo Cita</span>
            </div>
            <div className={styles.iconItem}>
              <CheckIcon />
              <span>Horarios Flexibles</span>
            </div>
          </div>
        </div>
        {/* Green Torn Strip */}
        <div className={styles.greenStrip}>
          <a
            href="https://wa.me/593996466386?text=Hola%20Camila!%20Tengo%20una%20duda..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            ¡Hola Camila! Tengo una duda...{" "}
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceModality;
