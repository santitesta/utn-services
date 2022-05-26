import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEquipos } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';
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
  const dispatch = useDispatch()

  const devices = useSelector(state => state.equipos)
  
  function handleClick(e) {
    e.preventDefault()
    dispatch(getEquipos())
  }

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginate = function (pageNumber) {
      setCurrentPage(pageNumber);
  };
  const currentProducts = devices.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.button} onClick={handleClick}>Buscar equipos</button>
        {currentProducts?.map(e => {
          return(
            <div key={equipos.id} className={styles.cardContainer}>
              <p className={styles.link}>Tipo: {e.type}</p>
              <p className={styles.link}>Nº UTN: {e.nutn}</p>
              <p className={styles.link}>Servicio: Fantasia</p>
              <p className={styles.link}>Instituto: INEI</p>
              {/* <button className={styles.button} onClick={handleClick}>Solicitud</button> */}
            </div>
          )
        })}    
      </div>
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={devices.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;