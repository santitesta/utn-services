import styles from './ProductList.module.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeviceById, getEquipos } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function ProductList() {

  const dispatch = useDispatch()
  const devices = useSelector(state => state.equipos)
  const device = useSelector(state => state.equipo)

  const [query, setQuery] = useState([])

  function handleClick(e) {
    e.preventDefault()
    dispatch(getEquipos())
  }

  function filterById(e) {
    e.preventDefault()
    dispatch(getDeviceById(query))
    setQuery([])
  }

   //PAGINATION
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage] = useState(10);
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const paginate = function (pageNumber) {
       setCurrentPage(pageNumber);
   };
   const currentProducts = devices.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex">
      <div className='w-1/5'>
        <button className={styles.generalQuery} onClick={handleClick}>Buscar equipos</button>
        <input className={styles.idInput} type="text"
            placeholder='Ingrese el id...'
            value={query}
            onChange={e => setQuery(e.target.value)}/>
          <button className={styles.idQuery} onClick={e => filterById(e)}>GO</button>
      </div>
      <div className='w-4/5 grid justify-items-center'>
        <div className="px-5 mt-6 grid grid-cols-1 gap-y-10 gap-x-20 xl:gap-x-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 ">
          {device.id_inei?
          <div className="w-full min-h-80 bg-slate-300 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:w-40 lg:h-80 lg:aspect-auto">
            <img
                  src={device.imageSrc}
                  alt='Not found'
                  className="px-2 mt-2 w-full h-full object-center object-cover lg:w-40 lg:h-40"
            />
            <p className="ml-2 mt-1 text-sm text-slate-800">{device.id_inei}</p>
            <p className="ml-2 mt-1 text-sm text-slate-800">{device.instituto}</p>
            <p className="ml-2 mt-1 text-sm text-slate-600">{device.departamento}</p>
          </div>
          :currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-slate-300 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:w-40 lg:h-80 lg:aspect-auto">
                <img
                  src={product.imageSrc}
                  alt='Not found'
                  className="px-2 mt-2 w-full h-full object-center object-cover lg:w-40 lg:h-40"
                />
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.id_inei}</p>
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.instituto}</p>
                <p className="ml-2 mt-1 text-sm text-slate-600">{product.departamento}</p>
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.servicio}</p>
                <p className="ml-2 mt-1 text-sm text-slate-600">{product.equipo}</p>
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.marca}</p>
                <p className="ml-2 mt-1 text-sm text-slate-600">{product.modelo}</p>
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {
        currentProducts.length && !device.id_inei?
        <Pagination
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={devices.length}
          paginate={paginate}
        />
        :null
        }
      </div>
    </div>
  )
}
