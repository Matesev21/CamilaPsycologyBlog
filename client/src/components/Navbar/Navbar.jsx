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
        <a href="" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          Servicios
        </a>
        <a
          href="#blog"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </a>

        <a
          className={styles.ctaBtn}
          onClick={() => setIsMenuOpen(false)}
          href="https://wa.me/593996466386?text=Hola%20quisiera%20agendar%20una%20cita"
        >
          Agendar Cita
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
