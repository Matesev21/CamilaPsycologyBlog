import React from "react";
import styles from "./SupportAreas.module.css";
import { supportAreas } from "../../constants/servicesData";

const SupportAreas = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Áreas de Apoyo</h2>
      <div className={styles.grid}>
        {supportAreas.map((area, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.5 8.5L13 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className={styles.text}>{area}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportAreas;
