import React from 'react';
import styles from './Posts.module.css'

const equipos = [
  {
    id: 1,
    type: 'AC',
    nutn: 3001
  },
  {
    id: 2,
    type: 'Autoclave',
    nutn: 729
  },
  {
    id: 3,
    type: 'Incinerador',
    nutn: 4001
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  },
  {
    id: 5,
    type: 'Freezer',
    nutn: 3252
  },
  {
    id: 1,
    type: 'AC',
    nutn: 3001
  },
  {
    id: 2,
    type: 'Autoclave',
    nutn: 729
  },
  {
    id: 3,
    type: 'Incinerador',
    nutn: 4001
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  },
  {
    id: 5,
    type: 'Freezer',
    nutn: 3252
  },
  {
    id: 1,
    type: 'AC',
    nutn: 3001
  },
  {
    id: 2,
    type: 'Autoclave',
    nutn: 729
  },
  {
    id: 3,
    type: 'Incinerador',
    nutn: 4001
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  },
  {
    id: 5,
    type: 'Freezer',
    nutn: 3252
  },
  {
    id: 1,
    type: 'AC',
    nutn: 3001
  },
  {
    id: 2,
    type: 'Autoclave',
    nutn: 729
  },
  {
    id: 3,
    type: 'Incinerador',
    nutn: 4001
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  },
  {
    id: 4,
    type: 'Heladera',
    nutn: 1525
  }
]

const Posts = () => {

  return (
    <div className={styles.container}>
      {equipos.map(e => {
        return(
          <div key={equipos.id} className={styles.cardContainer}>
            <p className={styles.link}>Tipo: {e.type}</p>
            <p className={styles.link}>Nº UTN: {e.nutn}</p>
            <p className={styles.link}>Servicio: Fantasia</p>
            <p className={styles.link}>Instituto: INEI</p>
            <button className={styles.button} >Solicitud</button>
          </div>
        )
      })}    
    </div>
  );
};

export default Posts;