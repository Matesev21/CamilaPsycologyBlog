import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        {/* Left: Brand */}
        <div className={styles.brandColumn}>
          <h3 className={styles.brandTitle}>Camila Navas</h3>
          <p className={styles.brandSubtitle}>Tu espacio seguro.</p>
        </div>

        {/* Center: Links */}
        <div className={styles.linksColumn}>
          <a href="#" className={styles.link}>
            Inicio
          </a>
          <a href="#services" className={styles.link}>
            Servicios
          </a>
          <a href="#blog" className={styles.link}>
            Blog
          </a>
        </div>

        {/* Right: Social & Info */}
        <div className={styles.socialColumn}>
          <span className={styles.madeWith}>Hecho con cariño 🤍</span>
          <div className={styles.icons}>
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            {/* WhatsApp Icon */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 11.5C21 16.19 17.19 20 12.5 20C10.88 20 9.38 19.57 8.08 18.82L3 20L5.27 15.28C4.16 13.78 3.5 11.96 3.5 10C3.5 5.3 7.3 1.5 12 1.5C16.97 1.5 21 5.53 21 10.5V11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
