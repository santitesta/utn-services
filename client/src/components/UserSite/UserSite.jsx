import React, { useState } from 'react'
import Orders from '../Orders/Orders'
import CreateOrder from '../Orders/CreateOrder'
import { institutes } from '../../utilities/institutes'

const UserSite = () => {
  const [Page, setPage] = useState('viewOrders');

  function HandlePage(e) {
    if (e === 'viewOrders') setPage('viewOrders')
    if (e === 'createOrder') setPage('createOrder')
  }

  return (
    <div className="flex flex-col items-center">
      {/* //------------------------- menu superior ------------------------------------- */}

      <ul className="menu menu-horizontal bg-base-100 p-1 rounded-box">
        <li>
          <button
            onClick={() => HandlePage('viewOrders')}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span>Ver órdenes</span>
          </button>
        </li>
        {localStorage.institute === institutes.INPB ?
          localStorage.user === 'navarrete@mail.com' ?
            <li>
              <button
                onClick={() => HandlePage('createOrder')}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span>Crear orden</span>
              </button>
            </li>
            : null
          : <li>
            <button
              onClick={() => HandlePage('createOrder')}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span>Crear orden</span>
            </button>
          </li>
        }
      </ul>

      {/* //---------------------------------------- tabla ---------------------------------- */}
      <div className="flex-auto w-full">
        {Page === 'viewOrders' &&
          <Orders />
        }
        {Page === 'createOrder' &&
          <CreateOrder />
        }
      </div>
    </div>
  )
}

export default UserSite