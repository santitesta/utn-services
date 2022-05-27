import React from 'react';

import Posts from '../Posts/Posts';
import styles from './Home.module.css'

function Home() {

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Buscador de equipos</h1>
        <Posts />
      </div>
  );
};

export default Home;