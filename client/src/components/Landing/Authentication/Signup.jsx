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
    await dispatch(signUp(data))
    if (localStorage.user) {
      navigate("/home")
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autocomplete="off"
      className='grid place-items-center gap-1'>

      <input type="text"
        name='nickname'
        className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
        focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        placeholder='Nombre de usuario'
        {...register("nickname", { required: 'Nombre de usuario requerido' })}
      />

      <input type="text"
        name='email'
        className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
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
        className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
        focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        placeholder='Contraseña'
        {...register("password", { required: 'Contraseña requerida' })} />

      <div className='w-60 mt-3 grid grid-cols-1 gap-1'>
        <select
          className='select select-accent w-60 max-w-xs'
          {...register("instituto", {
            onChange: () => {
              resetField("departamento")
              resetField("servicio")
            }
          })}>

          <option defaultValue="" value="">Instituto...</option>
          {Object.keys(hierarchy).map(d => {
            return <option key={d} value={d}>{d}</option>
          })}
        </select>

        <select
          className='select select-accent w-60 max-w-xs'
          {...register("departamento")}
          disabled={!watch("instituto") || watch("instituto") === 'Admin'}>

          <option defaultValue="" value="">Departamento...</option>
          {watch("instituto") && Object.keys(hierarchy[watch("instituto")]).map(d => {
            return <option key={d} value={d}>{d}</option>
          })}
        </select>

        <select
          className='select select-accent w-60 max-w-xs'
          {...register("servicio")}
          disabled={!watch("instituto") || watch("instituto") === 'Admin' || !watch("departamento")}>

          <option defaultValue="" value="">Servicio...</option>
          {watch("instituto") && watch("departamento") && hierarchy[watch("instituto")][watch("departamento")].map(s => {
            return <option key={s} value={s}>{s}</option>
          })}
        </select>

      </div>

      <input type="submit"
        value="Crear cuenta"
        className="btn btn-primary w-4/5" />

      {Object.keys(errors).length ?
        <div class="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <div className='flex flex-col justify-center'>
              <p>{errors.nickname?.message}</p>
              <p>{errors.email?.message}</p>
              <p>{errors.password?.message}</p>
            </div>
          </div>
        </div>
        : null}

    </form >
  );
};