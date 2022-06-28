import React from 'react';

import Filters from '../Filters/Filters';
import ProductList from '../ProductList/ProductList';
// import styles from './Home.module.css'

function Home() {

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <h1>
          El equipo de UTN te dejará entrar pronto!
        </h1>
        <h3>
          Cuando te habiliten, cierra sesión e ingresa nuevamente con esta cuenta para tener acceso completo
        </h3>
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
    <h1>
      Ingrese con su cuenta para ver sus equipos y crear órdenes
    </h1>
  )
};

export default Home;