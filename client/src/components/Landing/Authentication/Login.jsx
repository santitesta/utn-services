import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    await dispatch(login(data))
    if (localStorage.user) {
      navigate("/home")
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='border-solid border-2 border-sky-500 p-2 grid place-items-center gap-1'>

      <input type="text"
        className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
        focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        placeholder='Email'
        {...register("email", {
          required: 'Ingrese un email válido',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Ingrese un email válido'
          }
        })} />

      <input type="password"
        className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
        focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        placeholder='Contraseña'
        {...register("password", { required: 'Ingrese su contraseña' })} />

      <br />

      <input type='submit'
        value='Login'
        className="btn btn-primary w-3/5" />

      {Object.keys(errors).length ?
        <div class="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <div className='flex flex-col justify-center'>
              <p>{errors.email?.message}</p>
              <p>{errors.password?.message}</p>
            </div>
          </div>
        </div>
        : null}
    </form>
  );
};