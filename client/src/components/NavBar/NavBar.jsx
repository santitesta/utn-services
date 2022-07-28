/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { countPendingOrders, countVerified, logout } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const dispatch = useDispatch();
  const verifiedPending = useSelector(state => state.verifiedPending)
  const pendingOrders = useSelector(state => state.pendingOrders)

  let navigation = [
    { name: 'Ingresar', href: '/' },
    { name: 'Inicio', href: '/home' },
    { name: 'Crear orden', href: '/admin' },
    { name: 'Ver órdenes', href: '/admin' }
  ]

  if (localStorage.institute === 'Admin') {
    navigation.shift()
    navigation.push({ name: 'Usuarios', href: '/admin' })
  } else if (localStorage.institute) {
    navigation.shift()
  }

  navigation.push({ name: 'Sobre nosotros', href: '/about' })

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(countVerified())
      dispatch(countPendingOrders())
    }, 60000);
    return () => clearInterval(interval);
  }, [])


  return (
    <Disclosure as="nav" className="bg-primary flex justify-between items-center border-b-2 
    border-gray-100 py-1 md:justify-start md:space-x-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-16">
              <div className="inset-y-5 left-2 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-white 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menú</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 items-center w-64 md:w-80 ">
                  <img src={require("./Logos.png")} alt="No esta el amigo logo" />
                </div>
                <div className="space-x-4 h-9 ml-10 items-center hidden md:flex">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive
                        ? 'shadow rounded-box border bg-slate-800 text-gray-50 border-slate-600 px-3 py-2 text-sm font-medium'
                        : 'shadow bg-base-100 rounded-box text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}

                </div>
              </div>
              <div className=" inset-y-0 right-0 flex items-center pr-2 static inset-auto ml-6 sm:pr-0">

                {localStorage.institute === 'Admin' &&
                  <>
                    <div className="indicator mr-3 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-slate-300 hover:stroke-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                      <span className="badge badge-md indicator-item bg-white">{verifiedPending}</span>
                    </div>
                  </>
                }

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-50">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Abrir menú de usuario</span>
                      <div className="avatar placeholder">
                        <div className="bg-slate-200 text-neutral-content rounded-full w-12 hover:bg-accent">
                          <span>{localStorage.user ? localStorage.user.slice(0, 2).toUpperCase() : '-'}</span>
                        </div>
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {localStorage.user ?
                          ({ active }) => (
                            <button className={classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700')}
                              onClick={() => dispatch(logout())}
                            >
                              Cerrar sesión
                            </button>
                          )
                          : ({ active }) => (
                            <NavLink to='/' className={classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700')}>
                              Iniciar sesión
                            </NavLink>
                          )
                        }
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div>
              <Disclosure.Panel className="sm:hidden rounded-xl shadow-lg py-1 mb-2 w-64 bg-slate-800 ring-1 
              ring-black ring-opacity-5 focus:outline-none">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' 
                        :'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </div>
        </>
      )
      }
    </Disclosure >
  )
}
