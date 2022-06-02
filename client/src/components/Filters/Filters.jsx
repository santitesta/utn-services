import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getEquipos } from '../../redux/actions';
import styles from './Filters.module.css'
import { useForm } from "react-hook-form";

function Filters() {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
  const onSubmit = async data => {
    console.log(data)
    if (!data.instituto.length) {
      // await setQuery(data.instituto)
      dispatch(getDeviceById(data.id_inei))
      // setQuery([])
      reset()
    } else {
      console.log('No negri')
      setError("id_inei", { type: "custom", message: 'Bra' })
    }
  };


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
        <input placeholder='ID...' {...register("id_inei")} className='m-1' />
        <input placeholder='Instituto...' {...register("instituto")} className='m-1' />
        <input type="submit" value='Buscar' />
        {errors.id_inei && <p>{errors.id_inei.message}</p>}
      </form>
    </div>
  );
};

export default Filters;