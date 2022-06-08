import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../../redux/actions';
import { validate } from './validate';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({ email: '', password: '', institute: '' })
  const [errors, setErrors] = useState('')
  console.log(userSignup)
  function signUpChange(e) {
    setErrors(validate({ ...userSignup, [e.target.name]: e.target.value }))
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

    <div className='border-solid border-2 border-sky-500 p-2'>
      {Object.keys(errors).length ? <p>{errors}</p> : null}
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        type="text" placeholder='User'
        onChange={signUpChange} name='email' value={userSignup.email} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="password" placeholder='Password'
        onChange={signUpChange} name='password' value={userSignup.password} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='institute'
        onChange={signUpChange} name='institute' value={userSignup.institute} />

      {/* <select {...register("instituto")} className='m-1 w-40' disabled={watch("id_inei")}>
        <option defaultValue value="">Elija Instituto...</option>
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
      Convert to useForm
      */}
      <button className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};