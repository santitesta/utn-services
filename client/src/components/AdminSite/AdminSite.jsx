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

  return (
    <div>
      <div class="flex flex-row">
        {/* //------------------------- menu lateral ------------------------------------- */}
        <div>
          <aside class="w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded grey:bg-gray-800">
              <ul class="space-y-2">
                <li>
                  <button
                    onClick={() => HandlePage('Users')}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-3">Users</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('Orders')}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span class="ml-3">Orders</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* //---------------------------------------- tabla ---------------------------------- */}
        <div class="flex-auto">
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
    </div>
  );
}