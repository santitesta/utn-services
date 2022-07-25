/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Proyectos', href: 'proyectos' },
  { name: 'Servicios', href: 'servicios' },
  { name: 'Contacto', href: 'contacto' },
  { name: 'Nosotros', href: 'nosotros' },
]

export default function Landing() {
  return (
    <div className="relative bg-white overflow-hidden lg:h-screen ">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative py-3 px-4 sm:px-6 lg:px-8 w-full">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10"
                        src={require("./icon_wp.png")}
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Abrir menú</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={require("./icon_wp.png")}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Cerrar menú</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">UTN - Servicios</span>{' '}
              </h1>
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                <span className="text-blue-900 xl:inline">Seguimiento de Equipos</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Sitio web creado por el personal de UTN con la finalidad de facilitar el seguimiento del mantenimiento de los equipos de los distintos departamentos del Instituto Malbrán.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              

                {/* Boton de inicio de sesion */}
                <div className="rounded-md shadow hover:shadow-none">
                  <label htmlFor="my-modal" className="transition ease-in-out active:scale-90 cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10  active:bg-blue-700">Iniciar sesión</label>
                  <input type="checkbox" id="my-modal" className="modal-toggle" />
                  <div className="modal ">
                    <div className="modal-box relative w-80 ">
                      <label htmlFor="my-modal" className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
                      <Login />
                    </div>
                  </div>
                </div>

                 {/* Boton de registrarse */}
                <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md shadow hover:shadow-none">
                  <label htmlFor="my-modal-2" className="transition ease-in-out active:scale-90 cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-blue-700 bg-blue-200 hover:bg-blue-300 md:py-4 md:text-lg md:px-10">Registrarse</label>
                  <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative w-80 ">
                      <label htmlFor="my-modal-2" className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
                      <Signup />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div >
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-100">
        <video height="256" loop={true} autoPlay="autoPlay" id="vid" muted className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
          <source src={require(`./video${Math.floor(Math.random()*3)}.mp4`)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div >
  )
}