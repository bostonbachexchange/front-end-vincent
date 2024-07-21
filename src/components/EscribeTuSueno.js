import React, { useState } from 'react';
import styles from './EscribeTuSueno.module.css';
import titleImage from '../assets/escribeTuSueno.gif'; // replace with the correct path
// import backgroundImage from '../assets/backgroundEscribeTuSueno.webp'; 
// replace with the correct path

const EscribeTuSueno = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [dream, setDream] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Location:', location);
    console.log('Date:', date);
    console.log('Dream:', dream);
  };

  return (
    <section className={styles.escribeTuSueno}>
      <div className={styles.container}>
        <div className={styles.row}>
            <img src={titleImage} alt="Escribe tu sueño" className={styles.titleImage} />
            <button className={styles.inicioButton}>inicio</button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="location">Ubicación (ciudad y país)</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Fecha en que lo soñaste</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dream">Escribe aquí tu sueño</label>
            <textarea
              id="dream"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Continuar</button>
        </form>
      </div>
    </section>
  );
};

export default EscribeTuSueno;
