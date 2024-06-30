import React from 'react';
import styles from './Proyectos.module.css';
import projectImage1 from '../assets/GUERRA-SIGUE.webp'; // replace with actual image imports
import projectImage2 from '../assets/Klondike.webp';
import projectImage3 from '../assets/amor.webp';
import projectImage4 from '../assets/despedida.webp';
import projectImage5 from '../assets/mesa.webp';
import projectImage6 from '../assets/tanque.webp';
import projectImage7 from '../assets/hokusai.webp';

const projects = [
  {
    title: 'Y LA GUERRA SIGUE',
    image: projectImage1,
    link: 'https://www.vincentcompanyparafracasados.com/y-la-guerra-sigue',
    styles: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '2rem',
        fontStyle: 'italic',
        fontWeight: 'bold',
      },
  },
  {
    title: 'Perro Muerto en Klondike',
    image: projectImage2,
    link: '/proyectos/klondike',
    styles: {
        fontFamily: 'Times New Roman, serif',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
  },
  {
    title: 'Tal vez esto no se trata de amor',
    image: projectImage3,
    link: '/proyectos/amor',
    styles: {
        fontFamily: 'Courier New, monospace',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
  },
  {
    title: 'La ciencia de la despedida',
    image: projectImage4,
    link: '/proyectos/despedida',
    styles: {
        fontFamily: 'Courier New, monospace',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
  },
  {
    title: 'En la mesa sigue el porque',
    image: projectImage5,
    link: '/proyectos/mesa',
    styles: {
        fontFamily: 'Courier New, monospace',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
  },
  {
    title: 'El tanque de las monas',
    image: projectImage6,
    link: '/proyectos/tanque',
    styles: {
        fontFamily: 'Courier New, monospace',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
  },
  {
    title: 'Yo también me llamo Hokusai',
    image: projectImage7,
    link: '/proyectos/hokusai',
    styles: {
        fontFamily: 'Courier New, monospace',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
  }
];

const Proyectos = () => {
    return (
      <section className={styles.proyectos}>
        <div className={styles.container}>
          {projects.map((project, index) => (
            <a href={project.link} className={styles.projectLink} key={index}>
              <div className={`${styles.project} ${index % 2 === 1 ? styles.rowReverse : ''}`}>
                <div className={styles.projectText}>
                  <h2 className={styles.projectTitle} style={project.styles}>{project.title}</h2>
                </div>
                <div className={styles.projectImageContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  

export default Proyectos;
