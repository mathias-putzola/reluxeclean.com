import React from 'react';
import styles from './modules/Prestations.module.css'; // Import du fichier CSS
import img1 from '../images/prestations/interieur1.png';
import img2 from '../images/prestations/interieur2.png';
import img4 from '../images/prestations/interieur4.png';
import img5 from '../images/prestations/interieur5.png';
import img6 from '../images/prestations/interieur6.png';
import img7 from '../images/prestations/interieur7.png';
import img8 from '../images/prestations/interieur8.png';
import img9 from '../images/prestations/exterieur1.png';
import img10 from '../images/prestations/exterieur2.png';
import img11 from '../images/prestations/exterieur3.png';

interface Prestation {
  image: string;
  title: string;
  description: string;
  price: number;
}

const interieures: Prestation[] = [
  {
    title: 'Nettoyage Sièges',
    image: img1.src,
    description: 'Nettoyage en profondeur des sièges.',
    price: 25,
  },
  {
    title: 'Aspiration Moquettes',
    image: img2.src,
    description: 'Aspiration complète des moquettes.',
    price: 15,
  },
  {
    title: 'Nettoyage des Vitres',
    image: img4.src,
    description: 'Vitres sans traces et brillantes.',
    price: 10,
  },
  {
    title: 'Désinfection Intérieure',
    image: img5.src,
    description: 'Désinfection complète de l’intérieur.',
    price: 35,
  },
  {
    title: 'Nettoyage Volant',
    image: img6.src,
    description: 'Un volant comme neuf.',
    price: 15,
  },
  {
    title: 'Nettoyage Coffre',
    image: img7.src,
    description: 'Nettoyage en profondeur du coffre.',
    price: 20,
  },
  {
    title: 'Nettoyage des Portières',
    image: img8.src,
    description: 'Portières nettoyées et désinfectées.',
    price: 15,
  },
];

const exterieures: Prestation[] = [
  {
    image: img9.src,
    title: 'Lavage Carrosserie',
    description: 'Redonnez de l’éclat à votre carrosserie.',
    price: 30,
  },
  {
    image: '/images/prestations/exterieur2.png',
    title: img10.src,
    description: 'Des jantes comme neuves.',
    price: 20,
  },
  {
    image: img11.src,
    title: 'Polissage Carrosserie',
    description: 'Un polissage pour un effet miroir.',
    price: 50,
  },{
    image: '/images/prestations/exterieur1.png',
    title: 'Lavage Carrosserie',
    description: 'Redonnez de l’éclat à votre carrosserie.',
    price: 30,
  },
  {
    image: '/images/prestations/exterieur3.png',
    title: 'Polissage Carrosserie',
    description: 'Un polissage pour un effet miroir.',
    price: 50,
  },{
    image: '/images/prestations/exterieur1.png',
    title: 'Lavage Carrosserie',
    description: 'Redonnez de l’éclat à votre carrosserie.',
    price: 30,
  },
  {
    image: '/images/prestations/exterieur2.png',
    title: 'Nettoyage des Jantes',
    description: 'Des jantes comme neuves.',
    price: 20,
  },
];

const formules: Prestation[] = [
  {
    image: '/images/prestations/complet2.png',
    title: 'Formule Premium',
    description: 'Nettoyage complet et cirage.',
    price: 90,
  },
  {
    image: '/images/prestations/complet3.png',
    title: 'Formule VIP',
    description: 'Nettoyage complet avec traitement spécial.',
    price: 120,
  },  {
    image: '/images/prestations/complet1.png',
    title: 'Formule Basique',
    description: 'Nettoyage intérieur et extérieur.',
    price: 60,
  },
  {
    image: '/images/prestations/complet2.png',
    title: 'Formule Premium',
    description: 'Nettoyage complet et cirage.',
    price: 90,
  },
  {
    image: '/images/prestations/complet3.png',
    title: 'Formule VIP',
    description: 'Nettoyage complet avec traitement spécial.',
    price: 120,
  },  {
    image: '/images/prestations/complet1.png',
    title: 'Formule Basique',
    description: 'Nettoyage intérieur et extérieur.',
    price: 60,
  },
  {
    image: '/images/prestations/complet2.png',
    title: 'Formule Premium',
    description: 'Nettoyage complet et cirage.',
    price: 90,
  },
];
const Prestations: React.FC = () => {
  return (
    <section id="prestations" className={styles.section}>
      <h2 className={styles.title}>Nos Prestations</h2>

      <div className={styles.prestationsection}>
        <h3 className={styles.prestationtitle}>Prestations Intérieures</h3>
        <div className={`${styles.columns} ${styles.col}`}>
          {interieures.map((prestation, idx) => (
            <div key={idx} className={styles.service}>
              <img src={prestation.image} alt={prestation.title} />
              <h4 className={styles.servicetitle}>{prestation.title}</h4>
              <p className={styles.serviceresume}>{prestation.description}</p>
              <span className={styles.price}>{prestation.price} €</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.prestationsection}>
        <h3 className={styles.prestationtitle}>Prestations Extérieures</h3>
        <div className={styles.columns}>
          {exterieures.map((prestation, idx) => (
            <div key={idx} className={styles.service}>
              <img src={prestation.image} alt={prestation.title} />
              <h4 className={styles.servicetitle}>{prestation.title}</h4>
              <p className={styles.serviceresume}>{prestation.description}</p>
              <span className={styles.price}>{prestation.price} €</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.prestationsection}>
        <h3 className={styles.prestationtitle}>Formules</h3>
        <div className={styles.columns}>
          {formules.map((prestation, idx) => (
            <div key={idx} className={styles.service}>
              <img src={prestation.image} alt={prestation.title} />
              <h4 className={styles.servicetitle}>{prestation.title}</h4>
              <p className={styles.serviceresume}>{prestation.description}</p>
              <span className={styles.price}>{prestation.price} €</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Prestations;