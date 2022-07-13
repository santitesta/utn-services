import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

export default function ProductList() {
  const devices = useSelector(state => state.equipos)
  const device = useSelector(state => state.equipo)
  const ph = useSelector(state => state.ph)

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
            </div>
          </div>
          : currentProducts.map((product) => (
            <div class="card w-40 h-80 bg-base-100 shadow-xl">
              <div class="card-body p-4 ">
                <h2 class="card-title text-base">{product.id_inei}</h2>
                {/* <img src={require(`./fotos/${product.id_inei}.JPG`)} alt="" /> */}
                {ph[product.id_inei] === 1 ?
                  <img src={require(`./../../../../../UTNDB/data/fotos/${product.id_inei}.jpg`)} alt="Nada rey" />
                  : <img src={'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
                }
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
