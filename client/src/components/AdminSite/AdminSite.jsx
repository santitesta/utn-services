import React from "react";
import { useState } from "react";
import Users from "./Users";


export default function AdminPage() {
  const [Page, setPage] = useState('course');

  function HandlePage(e) {
    if (e === 'Users') setPage('Users')
  }

  return (
    <div>
      <div>
        <h1>Tabla de admin</h1>
      </div>
      <div class="flex flex-row">
        {/* //------------------------- menu lateral ------------------------------------- */}
        <div>
          <aside class="w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded grey:bg-gray-800">
              <ul class="space-y-2">
                <li>
                  <button
                    onClick={() => HandlePage('course')}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">Courses</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('CreateCategory')}
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
                    <span class="ml-3">Create category</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('CreateCourse')}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                    <span class="ml-3">Create course</span>
                  </button>
                </li>
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
        </div>


      </div>
    </div>
  );
}