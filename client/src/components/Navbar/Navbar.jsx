import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        Camila Navas
      </a>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
      </div>

      <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <a
          href="#home"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Inicio
        </a>
        <a
          href="#about"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Sobre Mí
        </a>
        <a
          href="#services"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Servicios
        </a>
        <a
          href="#blog"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </a>

        <button className={styles.ctaBtn} onClick={() => setIsMenuOpen(false)}>
          Agendar Cita
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
