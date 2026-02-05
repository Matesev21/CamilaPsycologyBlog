import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <h2 className={styles.title}>¿Cómo Funciona?</h2>

      <div className={styles.stepsContainer}>
        {/* Step 1 */}
        <div className={styles.stepCard}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>1</span>
            {/* Calendar Icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                stroke="var(--color-accent)"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="2"
                x2="16"
                y2="6"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="2"
                x2="8"
                y2="6"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="3"
                y1="10"
                x2="21"
                y2="10"
                stroke="var(--color-accent)"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Agendas tu cita</h3>
          <p className={styles.stepDescription}>
            Elige el horario que mejor te convenga.
          </p>
          {/*Connector de flecha SVG 1*/}

          <svg
            className={styles.connector}
            viewBox="0 0 100 75"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Definimos la punta de la flecha una sola vez */}
              <marker
                id="arrowhead1"
                markerWidth="10"
                markerHeight="7"
                refX="4"
                refY="4.9"
                orient="40deg"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#000000ff" />
              </marker>
            </defs>

            {/* La curva S con la flecha aplicada al final */}
            <path
              d="M-20,70 C-25,75 70,120 50,30 S160,0 140,5" /*Valores para determinar curva*/
              stroke="#000000ff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,6"
              markerEnd="url(#arrowhead1)"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Step 2 */}
        <div className={styles.stepCard}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>2</span>
            {/* Chat/Video Icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Sesión de Bienvenida</h3>
          <p className={styles.stepDescription}>
            Nos conocemos y definimos objetivos.
          </p>
          {/*Connector de flecha SVG 2*/}

          <svg
            className={styles.connector}
            viewBox="0 0 100 75"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Definimos la punta de la flecha una sola vez */}
              <marker
                id="arrowhead2"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="2.2"
                orient="335deg"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#000000ff" />
              </marker>
            </defs>

            {/* La curva S con la flecha aplicada al final */}
            <path
              d="M-15,-10 C100,-70 40,0 50,60 S180,30 130,55" /* valores para la curva */
              stroke="#000000ff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6,6"
              markerEnd="url(#arrowhead2)"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Step 3 */}
        <div className={styles.stepCard}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>3</span>
            {/* Leaf/Plan Icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Tu Plan Personal</h3>
          <p className={styles.stepDescription}>Comenzamos a trabajar en ti.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
