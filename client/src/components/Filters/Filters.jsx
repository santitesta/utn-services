import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getEquipos } from '../../redux/actions';
import styles from './Filters.module.css'

function Filters() {
  const dispatch = useDispatch()

  const [query, setQuery] = useState([])

  function handleClick(e) {
    e.preventDefault()
    dispatch(getEquipos())
  }

  function filterById(e) {
    e.preventDefault()
    dispatch(getDeviceById(query))
    setQuery([])
  }

  return (
    <div className='w-1/5'>
      <button className={styles.generalQuery} onClick={handleClick}>Buscar equipos</button>
      <input className={styles.idInput} type="text"
        placeholder='Ingrese el id...'
        value={query}
        onChange={e => setQuery(e.target.value)} />
      <button className={styles.idQuery} onClick={e => filterById(e)}>GO</button>
    </div>
  );
};

export default Filters;