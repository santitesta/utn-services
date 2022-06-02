import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function Landing() {
  const dispatch = useDispatch();

  const [ sign, setSign ] = useState('')

  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout())
    localStorage.removeItem("user")
  }

  function showLogin() {
    setSign('login')
  }

  function showSignup() {
    setSign('signup')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UTN SERVICES</h1>
      <NavLink className={styles.linkHome} to='/home'>Home</NavLink>
      <div className={styles.auth}>
      {sign === '' &&
            <div className='flex justify-center gap-10'>
              {!localStorage.getItem("user")?
                <button onClick={showLogin} className='box-border w-40 bg-amber-700 text-white p-2 rounded-xl'>Login</button>
              :<button className="box-border w-40 bg-amber-500 text-white p-2 rounded-xl" onClick={handleLogout}>
                Logout
              </button>
              }
              <button onClick={showSignup} className='box-border w-40 bg-amber-700 text-white p-2 rounded-xl'>Sign Up</button>
            </div>
            }
            {sign === 'login' &&
              <div>
                <Login/>
                <br />
                <button onClick={() => setSign('')} className='box-border w-20 h-10 bg-amber-600 text-xs text-white rounded-xl'>Volver</button>
              </div>
            }
            {sign === 'signup' &&
              <div>
                <Signup/>
                <br />
                <button onClick={() => setSign('')} className='box-border w-20 h-10 bg-amber-600 text-xs text-white rounded-xl'>Volver</button>
              </div>
            }
      </div>
    </div>
  );
};

export default Landing;