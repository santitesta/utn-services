import React from 'react';
import ReactLogo from '../ReactLogo/ReactLogo';
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seguimiento UTN</h1>
      <p className={styles.description}>React-js Single Page Application (SPA) desarrollada por Santiago Testa y Martín Cogliatti como servicio a UTN para control de ANLIS</p>
      <ReactLogo/>
    </div>
  );
};

export default About;