import React from 'react';
import styles from './SobreElProyecto.module.css';
import animalGif from '../assets/animal.gif';
import titleGif from '../assets/title.gif';
import CarolinaLopez from '../assets/CarolinaLopez.png';
import LogoHead from '../assets/logohead.webp';
import ArandaOrtega from '../assets/arandaortega.webp';
import MapProfile from '../assets/tuprofile.webp';

const SobreElProyecto = () => {
  return (
    <div className={styles.sobreElProyecto}>
      <div className={styles.container}>
        <img src={titleGif} alt="Escribe tu sueño" className={styles.titleGif} />
        <div className={styles.content}>
          <img src={animalGif} alt="Animal" className={styles.animalGif} />
          <article>
          <p>
            Este proyecto es, en un primer momento, una recolección de sueños. Todos los sueños son bienvenidos. Queremos saber lo que estás soñando y cómo lo cuentas. Queremos saber lo que estamos soñando y cómo lo narramos.
          </p>
          <p>
            En la plataforma se pueden escribir, sin reglas, los sueños que estamos teniendo, y también leer sueños ajenos, ya sea al azar o buscando palabras clave.
          </p>
          <p>
            El sueño es ese evento extraño que atestigua una sola persona y por eso es especialmente importante compartirlo. Son sucesos personales pero de símbolos colectivos, y este proyecto pretende hacer un registro histórico de ellos.
          </p>
          </article>
        </div>
        <div className={styles.links}>
          <a href="/busca-un-sueno">Busca un sueño</a>
          <a href="/">Inicio</a>
          <a href="/escribe-tu-sueno">Escribe tu sueño</a>
          <a href="/instrucciones">Instrucciones</a>
        </div>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <img src={CarolinaLopez} alt="Carolina López" />
            <p className={styles.teamMemberName}>Carolina López</p>
            <p className={styles.teamMemberTitle}>Diseño web y producción</p>
          </div>
          <div className={styles.teamMember}>
            <img src={LogoHead} alt="Vincent Company" />
            <p className={styles.teamMemberName}>Vincent Company</p>
            <p className={styles.teamMemberTitle}>Plataforma y colaboradores</p>
          </div>
          <div className={styles.teamMember}>
            <img src={ArandaOrtega} alt="Aranda Ortega" />
            <p className={styles.teamMemberName}>Aranda Ortega</p>
            <p className={styles.teamMemberTitle}>Diseño visual</p>
          </div>
          <div className={styles.teamMember}>
            <img src={MapProfile} alt="Tú" />
            <p className={styles.teamMemberName}>Tú</p>
            <p className={styles.teamMemberTitle}>Escritor</p>
          </div>
        </div>
        <div>
            <p className={styles.teamMemberTitle}>Con un agradecimiento especial a Santiago Martínez por su colaboración en la programación web</p>
        </div>
      </div>
    </div>
  );
};

export default SobreElProyecto;
