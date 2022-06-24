import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

function Landing() {
  const dispatch = useDispatch();

  const [sign, setSign] = useState('')

  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout())
  }

  function showLogin() {
    setSign('login')
  }

  function showSignup() {
    setSign('signup')
  }

  return (
    <>
      {sign === '' &&
        <div className={styles.container}>
          <h1 className={styles.title}>UTN SERVICES</h1>
          <NavLink className={styles.linkHome} to='/home'>Home</NavLink>
          <div className={styles.auth}>
            <div className='flex justify-center gap-10'>
              {!localStorage.getItem("user") ?
                <>
                  <button onClick={showLogin} className='btn btn-primary w-44'>Login</button>
                  <button onClick={showSignup} className='btn btn-secondary w-44'>Sign Up</button>
                </>
                : <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              }
            </div>
          </div>
        </div>
      }
      {sign === 'login' &&
        <div className={styles.box}>
          <Login />
          <button onClick={() => setSign('')} className='btn btn-secondary'>Volver</button>
        </div>
      }
      {sign === 'signup' &&
        <div className={styles.box}>
          <Signup />
          <button onClick={() => setSign('')} className='btn btn-secondary'>Volver</button>
        </div>
      }
    </>
  );
};

export default Landing;