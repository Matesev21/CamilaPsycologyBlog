import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Camila Navas
      </Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
      </div>

      <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <Link
          to="/"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Inicio
        </Link>
        <a
          href="/#about"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Sobre Mí
        </a>
        <Link
          to="/servicios"
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Servicios
        </Link>
        <a
          href="/#blog"
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
