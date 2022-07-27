import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute, getDeviceByService } from '../../redux/actions';
import { useForm } from "react-hook-form";
import { institutes } from '../../utilities/institutes';
import { hierarchy } from '../../utilities/hierarchy';
// import styles from './Filters.module.css'

function Filters() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    if(localStorage.institute === 'Admin') dispatch(getDeviceByInstitute('I.N.E.I.'))
    else dispatch(getDeviceByInstitute(localStorage.institute))
  }, [])


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
    <div className='w-1/6 grid justify-items-center content-start'>

      {localStorage.institute === 'Admin' ?

        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>

          <div className='relative' >
          <input type="number"
            id="utn"
            className="block h-8 px-2.5 pb-2.5 pt-4 w-44 max-w-xs text-sm text-gray-900 bg-transparent rounded-lg border border-gray-500 
            appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:bg-gray-300 "
            placeholder=' '
            {...register("id_inei")}
            disabled={watch("instituto")}
            />
            <label for="utn" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 
            scale-75 top-2 z-10 origin-[0] peer-enabled:bg-white disabled:text-lg bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600
             peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
             peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1" >
             Nº UTN</label>
          </div>

          <select
            className="mt-3 form-select h-8 block w-44 px-3 py-1 text-sm text-gray-500 bg-white border border-solid
            border-slate-300 rounded-lg transition ease-in-out shadow-sm  focus:text-gray-700 focus:ring-0 focus:border-blue-600"
            {...register("instituto")}
            disabled={watch("id_inei")}>
            <option defaultValue="" value="">Instituto...</option>
            {Object.keys(institutes).map(i => {
              return institutes[i] !== 'Admin' && <option key={i} value={institutes[i]}>{institutes[i]}</option>
            })}
          </select>

          <select
            className="mt-2 disabled:text-gray-500 form-select h-8 block w-44 px-3 py-1 text-sm text-gray-500 bg-white border border-solid
            border-slate-300 rounded-lg transition ease-in-out shadow-sm  focus:text-gray-700 focus:ring-0 focus:border-blue-600 
            disabled:bg-gray-300"
            {...register("departamento")}
            disabled={!watch("instituto") || watch("instituto") === 'Admin'}>
            <option defaultValue="" value="">Departamento...</option>
            {watch("instituto") && Object.keys(hierarchy[watch("instituto")]).map(d => {
              return <option key={d} value={d}>{d}</option>
            })}
          </select>

          <select
            className="mt-2 disabled:text-gray-500 form-select h-8 block w-44 px-3 py-1 text-sm text-gray-500 bg-white border border-solid
            border-slate-300 rounded-lg transition ease-in-out shadow-sm  focus:text-gray-700 focus:ring-0 focus:border-blue-600 
            disabled:bg-gray-300"
            {...register("servicio")}
            disabled={!watch("instituto") || watch("instituto") === 'Admin' || !watch("departamento")}>

            <option defaultValue="" value="">Servicio...</option>
            {watch("instituto") && watch("departamento") && hierarchy[watch("instituto")][watch("departamento")].map(s => {
              return <option key={s} value={s}>{s}</option>
            })}
          </select>

          <input type="submit" value='Buscar' className="mt-3 h-10 transition ease-in-out active:scale-90 cursor-pointer flex items-center justify-center  
          border border-transparent text-base font-medium rounded-2xl text-white bg-blue-900 hover:bg-blue-800  active:bg-blue-700 w-44"
          disabled={!watch("id_inei") && !watch("instituto")} />
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

          : <h1>Inicie sesión para ver equipos.</h1>
      }
    </div>
  );
};

export default Filters;