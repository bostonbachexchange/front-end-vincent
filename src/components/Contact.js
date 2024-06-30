import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contacto</h1>
        <form>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Nombre" required className={styles.formControl} />
            <input type="text" placeholder="Apellido" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <input type="email" required placeholder="Email" className={styles.formControl} />
            <input type="tel" placeholder="Teléfono" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Tu mensaje..." className={`${styles.formControl} ${styles.fullWidth}`} rows="4"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
