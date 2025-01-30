// components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './modules/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>ReluxeClean</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li className={styles.menuItem}>
          <Link
            to="accueil"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="prestations"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Prestations
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="rendezvous"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Rendez-vous
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`${styles.link} ${styles.contactButton}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;