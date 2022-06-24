import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

export default function ProductList() {
  const devices = useSelector(state => state.equipos)
  const device = useSelector(state => state.equipo)

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
    <div className='w-4/5 h- grid justify-items-center'>
      <div className="px-5 mt-6 mb-10 w-full grid grid-cols-1 gap-y-10 gap-x-20 xl:gap-x-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        {device.id_inei ?
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{device.id_inei} - {device.equipo}</h2>
              <p>{device.instituto} - {device.departamento}</p>
              <div class="card-actions justify-end">
                <NavLink className="btn btn-secondary" to='/order'>Solicitar orden</NavLink>
              </div>
            </div>
          </div>
          : currentProducts.map((product) => (
            <div class="card w-40 h-40 bg-base-100 shadow-xl">
              <div class="card-body p-4 ">
                <h2 class="card-title text-base">{product.id_inei}</h2>
                <h2 class="card-title text-base h-1/3">{product.equipo}</h2>
                <p className='h-1/3'>{product.instituto}{product.departamento === '-' ? null : ` - ${product.departamento}`}</p>
              </div>
            </div>
          ))}
      </div>
      {
        currentProducts.length && !device.id_inei ?
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={devices.length}
            paginate={paginate}
          />
          : null
      }
    </div>
  )
}
