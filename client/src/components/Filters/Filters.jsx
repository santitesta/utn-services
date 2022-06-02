import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getEquipos } from '../../redux/actions';
import styles from './Filters.module.css'
import { useForm } from "react-hook-form";

function Filters() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

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
          onChange={e => setQuery(e.target.value)} />
        <button className={styles.idQuery} onClick={e => filterById(e)}>GO</button>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Filters;