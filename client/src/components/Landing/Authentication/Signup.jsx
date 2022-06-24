import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../../redux/actions';
import { validateSignUp } from './validateSignUp';
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const institutes = [
    "CENDIE",
    "C.N.C.C.B.",
    "C.N.G.M.",
    "Dr. C. G. Malbrán",
    "I.N.E.",
    "I.N.E.I.",
    "I.N.P.",
    "I.N.P.B.",
    "U.O.C.C.B.",
    "UTN MDQ"
  ]

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({ email: '', password: '', institute: '' })
  const [errors, setErrors] = useState('')
  console.log(userSignup)
  function signUpChange(e) {
    setErrors(validateSignUp({ ...userSignup, [e.target.name]: e.target.value }))
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value })
  }

  async function handleSignUp(e) {
    e.preventDefault()
    if (Object.keys(errors).length) {
      return alert('Please fill the right way')
    }
    await dispatch(signUp(userSignup))
    await dispatch(login(userSignup))
    if (localStorage.user) {
      navigate('/home')
    }
    setUserSignup({ email: '', password: '', institute: '' })
  }

  return (
    <div className='border-solid border-2 border-sky-500 p-2 grid place-items-center gap-1'>

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        type="text" placeholder='User'
        onChange={signUpChange} name='email' value={userSignup.email} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="password" placeholder='Password'
        onChange={signUpChange} name='password' value={userSignup.password} />

      <div className='w-56 mt-3 grid grid-cols-1 gap-1'>
        {institutes.map(i => {
          return <div key={i}>
            <input type='radio' id={i} name='institute' className='radio-sm radio-primary' value={i} onChange={signUpChange} />
            <label htmlFor={i}>{i}</label>
            <br />
          </div>
        })}
      </div>

      {Object.keys(errors).length ? <p>{errors}</p> : null}

      <button className="btn btn-primary w-3/5" onClick={handleSignUp}>
        Sign up
      </button>
    </div >
  );
};