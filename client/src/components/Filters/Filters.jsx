import React from 'react';
import { useDispatch } from 'react-redux';
import { getDeviceById, getDeviceByInstitute } from '../../redux/actions';
import { useForm } from "react-hook-form";
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

  return (
    <div className='w-1/5 grid justify-items-center content-start'>
      {localStorage.institute === 'Admin' ?
        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>
          <input type="number" placeholder='Buscar por id...' {...register("id_inei")} className="input input-bordered input-accent m-1 w-40 max-w-xs" disabled={watch("instituto")} />
          <select {...register("instituto")} className='select select-accent m-1 w-40 max-w-xs' disabled={watch("id_inei")}>
            <option defaultValue value="">Elija Instituto...</option>
            <option value="I.N.E.I.">INEI</option>
            <option value="I.N.P.B.">INPB</option>
            <option value="C.N.C.C.B.">CNCCB</option>
            <option value="U.O.C.C.B.">UOCCB</option>
            <option value="Dr. C. G. Malbrán">Dr Carlos Malbrán</option>
            <option value="I.N.P.">INP</option>
            <option value="C.N.G.M.">CNGM</option>
            <option value="I.N.E.">INE</option>
            <option value="UTN MDQ">UTN MDQ</option>
            <option value="CENDIE">CENDIE</option>
          </select>
          <input type="submit" value='Buscar' className='m-1' />
        </form>
        : localStorage.institute ?
          <div className='mt-3 grid justify-items-center content-start'>
            <div className='badge badge-primary p-6 text-4xl'>{localStorage.institute}</div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>
              <input type="number" placeholder='ID...' {...register("id_inei")} className='input input-bordered input-accent m-1 w-40 max-w-xs' disabled={watch("instituto")} />
              <input type="submit" value='Buscar todos' className='m-1 btn btn-secondary text-sm' />
            </form>
          </div>
          : <h1>Debe estar logeado para ver equipos</h1>
      }
    </div>
  );
};

export default Filters;