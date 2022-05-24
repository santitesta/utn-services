import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <p className={styles.link}>Tipo: {e.type}</p>
            <NavLink className={styles.link} to='/details'>Tipo: {e.type}</NavLink>
            <NavLink className={styles.link} to='/details'>Nº UTN: {e.nutn}</NavLink>
          </div>
        )
      })}    
    </div>
  );
};

export default Posts;