import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css'
import LoginButton from '../Auth0/LoginButton/LoginButton';
import LogoutButton from '../Auth0/LogoutButton/LogoutButton';
import Profile from '../Auth0/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Landing() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UTN SERVICES</h1>
      <NavLink className={styles.linkHome} to='/home'>Home</NavLink>
      <div className={styles.auth}>
        {isAuthenticated ? <>
        <Profile/>
        <LogoutButton/>
        </>
        :<LoginButton/>
        }
      </div>
    </div>
  );
};

export default Landing;