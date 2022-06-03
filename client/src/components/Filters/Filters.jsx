import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute, getEquipos } from '../../redux/actions';
import styles from './Filters.module.css'
import { useForm } from "react-hook-form";

function Filters() {
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = async data => {
    console.log(data)
    if(data.id_inei.length) {
      dispatch(getDeviceById(data.id_inei))
      reset()
    } else if(data.instituto.length) {
      dispatch(getDeviceByInstitute(data.instituto))
      reset()
    } else console.log('Fua');
  };
  console.log(watch())

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
    <div className='w-1/5 bg-emerald-400 grid justify-items-center content-start'>
      <div>
        <button className={styles.generalQuery} onClick={handleClick}>Buscar equipos</button>
      </div>
      <div className='m-1 bg-emerald-800'>
        <input className={styles.idInput} type="text"
          placeholder='Ingrese el id...'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button id='queryId' className={styles.idQuery} onClick={e => filterById(e)}>GO</button>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder='ID...' {...register("id_inei")} className='m-1' disabled={watch("instituto")}/>
        <input placeholder='Instituto...' {...register("instituto")} className='m-1' disabled={watch("id_inei")}/>
        <input type="submit" value='Buscar' />
      </form>
    </div>
  );
};

export default Filters;