import React from 'react';
import styles from './modules/HeroSection.module.css';
import imgSrc from '../images/Img3.png';

const Herosection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <img src={imgSrc.src} alt="ReluxeClean" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}></h1>
        <p className={styles.heroSubtitle}></p>
      </div>
    </section>
  );
};

export default Herosection;