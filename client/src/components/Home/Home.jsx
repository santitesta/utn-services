import React from 'react';

import Filters from '../Filters/Filters';
import ProductList from '../ProductList/ProductList';
// import styles from './Home.module.css'

function Home() {

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <div class="alert shadow-lg w-2/5 ml-3 mt-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>El equipo de UTN te dejará entrar pronto! Cuando te habiliten, cierra sesión e ingresa nuevamente con esta cuenta para tener acceso completo.</span>
          </div>
        </div>
      </>
    )
  }

  if (verified === 'true') {
    return (
      <div className='flex'>
        <Filters />
        <ProductList />
      </div>
    );
  }

  return (
    <div class="alert shadow-lg w-2/5 ml-3 mt-3">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Ingrese con su cuenta para ver sus equipos y crear órdenes de trabajo.</span>
      </div>
    </div>
  )
};

export default Home;