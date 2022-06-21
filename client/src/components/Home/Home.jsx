import React from 'react';

import Filters from '../Filters/Filters';
import ProductList from '../ProductList/ProductList';
import styles from './Home.module.css'

function Home() {

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <div>The team will allow you to enter soon!</div>
    )
  }

  if (verified === 'true') {
    return (
      <>
        <Filters />
        <ProductList />
      </>
    );
  }

  return (
    <h1>
      Please login to view your devices
    </h1>
  )
};

export default Home;