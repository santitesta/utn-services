import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions';
import { validate } from './validate';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState('')

  function loginChange(e) {
    setErrors(validate({ ...userLogin, [e.target.name]: e.target.value }))
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (Object.keys(errors).length) {
      return alert('Please fill the right way')
    }
    await dispatch(login(userLogin))
    if (localStorage.user) {
      navigate('/home')
    }
    setUserLogin({ email: '', password: '' })
  }

  return (
    <div className='border-solid border-2 border-sky-500 p-2 grid place-items-center gap-1'>

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        type="text" placeholder='User'
        onChange={loginChange} name='email' value={userLogin.email} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="password" placeholder='Password'
        onChange={loginChange} name='password' value={userLogin.password} />

      <br />

      <button className="btn btn-primary w-3/5" onClick={handleLogin}>
        Login
      </button>

      {Object.keys(errors).length ?
        <div class="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>{errors}</span>
          </div>
        </div>
        : null}
    </div>
  );
};