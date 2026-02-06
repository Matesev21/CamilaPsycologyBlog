import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faLinktree } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div classname={styles.above}>
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
            <a href="" className={styles.link}>
              Servicios
            </a>
            <a href="" className={styles.link}>
              Blog
            </a>
          </div>

          {/* Right: Social & Info */}
          <div className={styles.socialColumn}>
            <span className={styles.followMe}>Sigueme en: </span>
            <div className={styles.icons}>
              <a
                href="https://www.instagram.com/camilanavaspsi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* Linkedin Icon */}
              <a
                href="https://www.linkedin.com/in/camilanavas/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.threads.com/@camilanavaspsi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FontAwesomeIcon icon={faThreads} />
              </a>
              {/* Linketree Icon */}
              <a
                href="mailto:camilanavaspsi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FontAwesomeIcon icon={faLinktree} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.below}>
          <div className={styles.copyright}>
            <p>
              © {new Date().getFullYear()} Camila Navas. Terminos y Condiciones.
              Politica de Privacidad reservados.
            </p>
          </div>
          <div className={styles.logo}>
            <p className={styles.text}>Hecho con cariño ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
