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
    <div className='w-4/5 h-32 grid justify-items-center'>
      <div className="ml-60 mt-3 mb-10 w-full grid grid-cols-1 gap-y-10 gap-x-20 xl:gap-x-3 sm:ml-0 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">

        {device.id_inei ?

          <div class="card w-56 h-[27rem] bg-gray-100 shadow-lg border select-none 
          transition ease-in-out active:scale-90 active:bg-secondary cursor-pointer hover:bg-info overflow-visible">
            <div class="card-body p-2">
            <h2 className="flex align-middle justify-center text-md font-bold">UTN {device.id_inei}</h2>
            {ph[device.id_inei] === 1 ?
                  <div className='flex align-middle justify-center transition duration-200 delay-100 ease-in-out hover:scale-[2.0]'>
                    <img
                      className='object-cover h-60 w-40 shadow-xl rounded-lg pointer-events-none'
                      src={require(`./../../../../../UTNDB/data/fotos/${device.id_inei}.jpg`)}
                      alt="Nada rey" />
                  </div>
                  :
                  <div className='flex align-middle justify-center'>
                    <img
                      className='object-cover h-60 w-40 shadow-xl rounded-lg pointer-events-none'
                      src={require('./../../utilities/sin_imagen.png')}
                      alt="" />
                  </div>
                }
                <div className='h-auto w-48'>
                  <p className="flex justify-center text-center text-base font-bold">{device.equipo}</p>
                </div>

                <div className='ml-2 h-12 w-48'>
                  <p className='text-base'>{device.instituto}</p>
                  <p className='text-base'>{device.departamento === 'NA' ? null : (`${device.departamento}`)} </p>
                  <p className='text-base'>{((device.servicio === 'NA') || (device.servicio === device.departamento)) ? null 
                  : `${device.servicio}`}</p>
                </div>
            </div>
          </div>

          : currentProducts.map((product) => (
            <div className="card w-44 h-[19rem] bg-gray-100 shadow-lg border select-none 
            transition ease-in-out active:scale-90 active:bg-secondary cursor-pointer hover:bg-info overflow-visible">
              <div className="card-body p-2">

                <h2 className="flex align-middle justify-center text-sm font-bold">UTN {product.id_inei}</h2>

                {ph[product.id_inei] === 1 ?
                  <div className='flex align-middle justify-center transition duration-200 delay-100 ease-in-out hover:scale-[2.0]'>
                    <img
                      className='object-cover h-36 w-24 shadow-xl rounded-lg pointer-events-none'
                      src={require(`./../../../../../UTNDB/data/fotos/${product.id_inei}.jpg`)}
                      alt="Nada rey" />
                  </div>
                  :
                  <div className='flex align-middle justify-center'>
                    <img
                      className='object-cover h-36 w-24 shadow-xl rounded-lg pointer-events-none'
                      src={require('./../../utilities/sin_imagen.png')}
                      alt="" />
                  </div>
                }

                <div className='h-9 w-40'>
                  <p className="flex justify-center text-center text-sm font-bold">{product.equipo}</p>
                </div>

                <div className='h-9 w-40'>
                  <p className='text-sm'>{product.instituto}</p>
                  <p className='text-sm'>{product.departamento === 'NA' ? null : (`${product.departamento}`)} </p>
                  <p className='text-sm'>{((product.servicio === 'NA') || (product.servicio === product.departamento)) ? null 
                  : `${product.servicio}`}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-24">
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

    </div>
  )
}
