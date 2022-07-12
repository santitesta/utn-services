import React from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute } from '../../redux/actions';
import { useForm } from "react-hook-form";
import { institutes } from '../../utilities/institutes';
import { services } from '../../utilities/services';
// import styles from './Filters.module.css'

function Filters() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = async data => {
    if (localStorage.institute !== 'Admin') data.instituto = localStorage.institute
    if (data.id_inei.length) {
      if (localStorage.institute === 'Admin') data.instituto = localStorage.institute
      dispatch(getDeviceById({ id: data.id_inei, institute: data.instituto }))
      reset()
    } else if (data.instituto.length) {
      dispatch(getDeviceByInstitute(data.instituto))
      reset()
    } else alert('Antes elija algún filtro');
  };
  console.log('Esto: ',watch("instituto") === institutes.INEI)

  return (
    <div className='w-1/5 grid justify-items-center content-start'>
      {localStorage.institute === 'Admin' ?
        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>
          <input type="number" placeholder='Buscar por Nº UTN...' {...register("id_inei")} className="input input-bordered input-accent m-1 w-44 max-w-xs" disabled={watch("instituto")} />
          <select {...register("instituto")} className='select select-accent m-1 w-44 max-w-xs' disabled={watch("id_inei")}>
            <option defaultValue value="">Elija Instituto...</option>
            {Object.keys(institutes).map(i => {
              return <option value={institutes[i]}>{institutes[i]}</option>
            })}
          </select>
          <input type="number" placeholder={watch("instituto") === institutes.INEI ? 'Algo' : 'Algo más...'} {...register("id_inei")} className="input input-bordered input-accent m-1 w-44 max-w-xs" disabled={watch("instituto")} />
          <input type="submit" value='Buscar' className='btn btn-secondary m-1' />
        </form>
        : localStorage.institute ?
          <div className='mt-3 grid justify-items-center content-start'>
            <div className='badge badge-primary p-6 text-4xl'>{localStorage.institute}</div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>
              <input type="number" placeholder='Nº UTN...' {...register("id_inei")} className='input input-bordered input-accent m-1 w-44 max-w-xs' disabled={watch("instituto")} />
              <input type="submit" value='Buscar por id o todos' className='m-1 btn btn-secondary text-sm' />
            </form>
          </div>
          : <h1>Debe estar logeado para ver equipos</h1>
      }
    </div>
  );
};

export default Filters;