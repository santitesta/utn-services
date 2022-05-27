import React from 'react';
import styles from './ReactLogo.module.css'

function ReactLogo() {
  return (
    <div class={styles.container}>
        <span class={styles.reactlogo}>
          <span class={styles.nucleo}></span>
        </span>
      
    </div>
  );
};

export default ReactLogo;