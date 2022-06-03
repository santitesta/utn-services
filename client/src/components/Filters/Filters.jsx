import React from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute, getEquipos } from '../../redux/actions';
import styles from './Filters.module.css'
import { useForm } from "react-hook-form";

function Filters() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = async data => {
    console.log(data)
    if (data.id_inei.length) {
      dispatch(getDeviceById(data.id_inei))
      reset()
    } else if (data.instituto.length) {
      dispatch(getDeviceByInstitute(data.instituto))
      reset()
    } else console.log('Fua');
  };
  console.log(watch())

  function handleClick(e) {
    e.preventDefault()
    dispatch(getEquipos())
  }

  return (
    <div className='w-1/5 bg-emerald-400 grid justify-items-center content-start'>
      <div>
        <button className={styles.generalQuery} onClick={handleClick}>Buscar equipos</button>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder='ID...' {...register("id_inei")} className='m-1' disabled={watch("instituto")} />
        <select {...register("instituto")} className='m-1' disabled={watch("id_inei")}>
          <option value="" selected>Elija Instituto...</option>
          <option value="I.N.E.I.">INEI</option>
          <option value="I.N.P.B.">INPB</option>
          <option value="C.N.C.C.B.">CNCCB</option>
          <option value="U.O.C.C.B.">UOCCB</option>
          <option value="Dr. C. G. Malbrán">Dr Carlos Malbrán</option>
          <option value="I.N.P.">INP</option>
          <option value="C.N.G.M.">CNGM</option>
          <option value="I.N.E">INE</option>
          <option value="UTN MDQ">UTN MDQ</option>
          <option value="CENDIE">CENDIE</option>
        </select>
        <input type="submit" value='Buscar' />
      </form>
    </div>
  );
};

export default Filters;