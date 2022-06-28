import React from "react";
import { useState } from "react";
import Orders from "../Orders/Orders";
import Users from "./Users";


export default function AdminPage() {
  const [Page, setPage] = useState('Users');

  function HandlePage(e) {
    if (e === 'Users') setPage('Users')
    if (e === 'Orders') setPage('Orders')
  }

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <div class="alert shadow-lg w-2/5 ml-3 mt-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Pide al Admin General permisos para operar como Administrador. Cuando te habiliten, cierra sesión e ingresa nuevamente con esta cuenta para tener acceso completo</span>
          </div>
        </div>
      </>
    )
  }

  if (!verified) {
    return (<h1>
      Ingrese como administrador para ver el Panel de Admin
    </h1>)
  }

  return (
    <div className="flex flex-col items-center">
      {/* //------------------------- menu lateral ------------------------------------- */}

      <ul class="menu menu-horizontal bg-base-100 p-1 rounded-box">
        <li>
          <button
            onClick={() => HandlePage('Users')}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-black-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Usuarios</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => HandlePage('Orders')}
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
            <span>Órdenes</span>
          </button>
        </li>
      </ul>

      {/* //---------------------------------------- tabla ---------------------------------- */}
      <div className="flex-auto">
        {Page === 'Users' &&
          <div>
            <Users />
          </div>
        }
        {Page === 'Orders' &&
          <div>
            <Orders />
          </div>
        }
      </div>
    </div>
  );
}