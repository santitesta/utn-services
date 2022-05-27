import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEquipos } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';
import styles from './Posts.module.css'

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
    <div className={styles.bigcont}>
      <div className={styles.filters}>
        <h1 className={styles.filterTitle}>Filters</h1>
        <button className={styles.button} onClick={handleClick}>Buscar equipos</button>
      </div>
      <div className={styles.right}>
        <div className={styles.displayitems}>
          {currentProducts?.map(e => {
            return(
              <div key={e.id} className={styles.cardContainer}>
                <p className={styles.link}>Nº UTN: {e.id_inei}</p>
                <p className={styles.link}>Instituto: {e.instituto}</p>
                <p className={styles.link}>Departamento: {e.departamento}</p>
                <p className={styles.link}>Servicio: {e.servicio}</p>
                <p className={styles.link}>Equipo: {e.equipo}</p>
                <p className={styles.link}>Estado: {e.e_tecnico}</p>
                <p className={styles.link}>Marca: {e.marca}</p>
                <p className={styles.link}>Modelo: {e.modelo}</p>
              </div>
            )
          })}    
        </div>
        {
          currentProducts.length?
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={devices.length}
            paginate={paginate}
          />
          :null
        }
      </div>
    </div>
  );
};

export default Posts;