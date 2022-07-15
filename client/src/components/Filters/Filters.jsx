import React from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute, getDeviceByService } from '../../redux/actions';
import { useForm } from "react-hook-form";
import { institutes } from '../../utilities/institutes';
import { hierarchy } from '../../utilities/hierarchy';
// import styles from './Filters.module.css'

function Filters() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = async data => {
    console.log('Data: ', data)
    if (localStorage.institute !== 'Admin') data.instituto = localStorage.institute
    if (data.id_inei.length) {
      if (localStorage.institute === 'Admin') data.instituto = localStorage.institute
      dispatch(getDeviceById({ id: data.id_inei, institute: data.instituto }))
      reset()
    } else if (data.servicio) {
      dispatch(getDeviceByService(data.servicio))
      reset()
    // } else if (data.departamento) {
    //   dispatch(getDeviceByDepartment(data.servicio))
    //   reset()
    } else if (data.instituto.length) {
      dispatch(getDeviceByInstitute(data.instituto))
      reset()
    } else alert('Antes elija algún filtro');
  };

  return (
    <div className='w-1/5 grid justify-items-center content-start'>

      {localStorage.institute === 'Admin' ?

        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>

          <input type="number"
            className="input input-bordered input-accent m-1 w-44 max-w-xs"
            placeholder='Nº UTN...'
            {...register("id_inei")}
            disabled={watch("instituto")} />

          <select
            className='select select-accent m-1 w-44 max-w-xs'
            {...register("instituto")}
            disabled={watch("id_inei")}>

            <option defaultValue="" value="">Instituto...</option>
            {Object.keys(institutes).map(i => {
              return <option key={i} value={institutes[i]}>{institutes[i]}</option>
            })}
          </select>

          <select
            className='select select-accent m-1 w-44 max-w-xs'
            {...register("departamento")}
            disabled={!watch("instituto") || watch("instituto") === 'Admin'}>

            <option defaultValue="" value="">Departamento...</option>
            {watch("instituto") && Object.keys(hierarchy[watch("instituto")]).map(d => {
              return <option key={d} value={d}>{d}</option>
            })}
          </select>

          <select
            className='select select-accent m-1 w-44 max-w-xs'
            {...register("servicio")}
            disabled={!watch("instituto") || watch("instituto") === 'Admin' || !watch("departamento")}>

            <option defaultValue="" value="">Servicio...</option>
            {watch("instituto") && watch("departamento") && hierarchy[watch("instituto")][watch("departamento")].map(s => {
              return <option key={s} value={s}>{s}</option>
            })}
          </select>

          <input type="submit" value='Buscar' className='btn btn-secondary m-1' />
        </form>

        : localStorage.institute ?
          <div className='mt-3 grid justify-items-center content-start'>
            <div className='badge badge-primary p-6 text-4xl'>{localStorage.institute}</div>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>

              <input type="number"
                className='input input-bordered input-accent m-1 w-44 max-w-xs'
                placeholder='Nº UTN...'
                {...register("id_inei")}
                disabled={watch("instituto")} />

              <input type="submit"
                className='m-1 btn btn-secondary text-sm'
                value='Buscar por id o todos' />

            </form>

          </div>

          : <h1>Debe estar logeado para ver equipos</h1>
      }
    </div>
  );
};

export default Filters;