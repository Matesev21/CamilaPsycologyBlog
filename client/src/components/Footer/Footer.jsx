import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faLinktree } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.above}>
        <div className={styles.contentWrapper}>
          {/* Left: Brand */}
          <div className={styles.brandColumn}>
            <h3 className={styles.brandTitle}>Camila Navas</h3>
            <p className={styles.brandSubtitle}>Tu espacio seguro.</p>
          </div>

          {/* Center: Links */}
          <div className={styles.linksColumn}>
            <Link to="/" className={styles.link}>
              Inicio
            </Link>
            <Link to="/servicios" className={styles.link}>
              Servicios
            </Link>
            <Link to="/" className={styles.link}>
              Blog
            </Link>
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
                href="https://linktr.ee/camilanavaspsi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn6UNiyqVwsIBfnLBq0UCuYinz98jvce7DszXx6aNpou9OjbW4NHT8Xub2kks_aem_6HCHPzsPPQ3L8qvVylvvbA"
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
