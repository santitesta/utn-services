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
          The team will allow you to enter soon!
        </h1>
        <h3>
          When they let you in, please logout and sign in again to use the application
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
      Please login to view your devices
    </h1>
  )
};

export default Home;