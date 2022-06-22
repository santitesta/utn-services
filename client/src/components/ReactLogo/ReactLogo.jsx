import React from 'react';
import styles from './ReactLogo.module.css'

function ReactLogo() {
  return (
    <div className={styles.container}>
        <span className={styles.reactlogo}>
          <span className={styles.nucleo}></span>
        </span>
    </div>
  );
};

export default ReactLogo;