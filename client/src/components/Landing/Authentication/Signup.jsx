import React from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../redux/actions';
import { useNavigate } from 'react-router-dom'
import { hierarchy } from '../../../utilities/hierarchy';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, resetField, formState: { errors } } = useForm();

  const onSubmit = async data => {
    if (data.director) {
      data.departamento = null
      data.servicio = null
    } else if (data.jefe) {
      data.servicio = null
    }
    if (data.departamento === '') {
      data.departamento = null
    }
    if (data.servicio === '') {
      data.servicio = null
    }
    await dispatch(signUp(data))
    if (localStorage.user) {
      navigate("/home")
    }
  };

  return (

    <div className='flex items-center gap-5 w-3/5'>
      {/* <div className='flex flex-col w-2/5 gap-3'>

        <div class="alert alert-info shadow-lg h-20">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <div className='flex flex-col justify-center'>
            <p>Seleccione el servicio al que pertenece para ver sus equipos y generar órdenes de trabajo</p>
          </div>
        </div>

        <div class="alert alert-info shadow-lg h-20">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <div className='flex flex-col justify-center'>
            <p>Si es director de un instituto o jefe de departamento marque la casilla correspondiente</p>
          </div>
        </div>

        <div class="alert alert-info shadow-lg h-28">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <div className='flex flex-col justify-center'>
            <p>No todos los institutos tienen departamentos. En esos casos verá <span className='font-bold'>NA: no aplica</span>. Seleccionelo para ver los servicios de su instituto.</p>
          </div>
        </div>

      </div> */}

      <form onSubmit={handleSubmit(onSubmit)} autocomplete="off"
        className='p-1 grid place-items-center gap-1 w-2/5'>

        <div class="alert alert-sm place-content-start w-64 flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class=" stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="text-sm text-gray-700 align-middle" >Crea tu cuenta!</p>
        </div>

        <input type="text"
          name='nickname'
          className="h-8 mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
          placeholder='Nombre de usuario'
          {...register("nickname", { required: 'Nombre de usuario requerido' })}
        />

        <input type="text"
          name='email'
          className="h-8 mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
          placeholder='Email'
          {...register("email", {
            required: 'Email requerido',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email inválido'
            }
          })} />

        <input type="password"
          name='password'
          className="h-8 mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          placeholder='Contraseña'
          {...register("password", { required: 'Contraseña requerida' })} />

        <div className='w-64 mt-1 grid grid-cols-1 gap-2'>

          <div className='flex items-center gap-1'>
            <select
              className="form-select h-8 block w-44 px-3 py-1 text-sm text-gray-400 bg-white border border-solid border-slate-300 rounded
              transition ease-in-out shadow-sm focus:text-gray-600 focus:ring-blue-300 focus:border-blue-200 focus:outline-none"
              {...register("instituto", {
                onChange: () => {
                  resetField("departamento")
                  resetField("servicio")
                  resetField("jefe")
                }
              })}>

              <option defaultValue="" value="">Instituto...</option>
              {Object.keys(hierarchy).map(d => {
                return <option key={d} value={d}>{d}</option>
              })}
            </select>

            <input type='checkbox' class="checkbox checkbox-sm"
              {...register("director", {
                onChange: () => {
                  resetField("departamento")
                  resetField("servicio")
                }
              })}
              disabled={watch("jefe") || !watch("instituto")} />
            <span className="text-sm text-gray-700" >Director</span>
          </div>

          <div className='flex items-center gap-1'>
            <select
              className="form-select h-8 block w-44 px-3 py-1 text-sm text-gray-400 bg-white border border-solid border-slate-300 rounded
              transition ease-in-out shadow-sm focus:text-gray-600 focus:ring-blue-300 focus:border-blue-200 focus:outline-none"
              {...register("departamento", {
                required: {
                  value: !watch("director"),
                  message: 'Elija su departamento'
                }
              })}
              disabled={!watch("instituto") || watch("instituto") === 'Admin' || watch("director")}>

              <option defaultValue="" value="">Departamento...</option>
              {watch("instituto") && Object.keys(hierarchy[watch("instituto")]).map(d => {
                return <option key={d} value={d}>{d}</option>
              })}
            </select>
            <input type='checkbox' class="checkbox checkbox-sm"
              {...register("jefe", {
                onChange: () => {
                  resetField("servicio")
                }
              })}
              disabled={watch("director") || !watch("departamento")} />
            <span className="text-sm text-gray-700" >Jefe</span>
          </div>

          <select
            className="form-select h-8 block w-44 px-3 py-1 text-sm text-gray-400 bg-white border border-solid border-slate-300 rounded
            transition ease-in-out shadow-sm focus:text-gray-600 focus:ring-blue-300 focus:border-blue-200 focus:outline-none"
            {...register("servicio", {
              required: {
                value: !(watch("jefe") || watch("director")),
                message: 'Elija su servicio'
              }
            })}
            disabled={!watch("instituto") || watch("instituto") === 'Admin' || !watch("departamento") || watch("jefe")}>

            <option defaultValue="" value="">Servicio...</option>
            {watch("instituto") && watch("departamento") && hierarchy[watch("instituto")][watch("departamento")].map(s => {
              return <option key={s} value={s}>{s}</option>
            })}
          </select>

        </div>

        <input type="submit"
          value="Crear cuenta"
          className="mt-3 h-10 transition ease-in-out active:scale-90 cursor-pointer flex items-center justify-center  
          border border-transparent text-base font-medium rounded-2xl text-white bg-blue-900 hover:bg-blue-800  active:bg-blue-700 w-64"/>

        {Object.keys(errors).length ?
          <div className="mt-3 text-xs font-medium alert shadow-lg alert-error border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <div className='flex flex-col justify-center'>
                <p>{errors.nickname?.message}</p>
                <p>{errors.email?.message}</p>
                <p>{errors.password?.message}</p>
                <p>{errors.departamento?.message}</p>
                <p>{errors.servicio?.message}</p>
              </div>
            </div>
          </div>
          : null}

      </form >
    </div>
  );
};