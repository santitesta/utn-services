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
    <div className='w-4/5 grid justify-items-center'>
      <div className="px-5 mt-6 grid grid-cols-1 gap-y-10 gap-x-20 xl:gap-x-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 ">
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
            <div key={product.id_inei} className="group relative">
              <div className="w-full min-h-50 bg-slate-300 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:w-40 lg:h-40 lg:aspect-auto">
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.id_inei}</p>
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.instituto}</p>
                <p className="ml-2 mt-1 text-sm text-slate-600">{product.departamento}</p>
                <p className="ml-2 mt-1 text-sm text-slate-800">{product.servicio}</p>
                <p className="ml-2 mt-1 text-sm text-slate-600">{product.equipo}</p>
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                </a>
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
