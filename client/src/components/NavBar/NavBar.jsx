/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBarBro() {
  const dispatch = useDispatch();

  let navigation = [
    { name: 'Ingresar', href: '/' },
    { name: 'Inicio', href: '/home' },
    { name: 'Sobre nosotros', href: '/about' },
  ]

  if (localStorage.institute === 'Admin') {
    navigation.shift()
    navigation.push({ name: 'Panel de Admin', href: '/admin' })
  } else if (localStorage.institute) {
    navigation.shift()
    navigation.push({ name: 'Crear orden', href: '/order' })
  }

  return (
    <Disclosure as="nav" className="bg-sky-700 h-20 mb-2 flex items-center justify-between">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center w-80">
                  <img src={require("./Logos.png")} alt="No esta el amigo logo" />
                </div>
                <div className="flex space-x-4 h-9 ml-5 items-center">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive
                        ? 'nav-link bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-50">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
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
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
