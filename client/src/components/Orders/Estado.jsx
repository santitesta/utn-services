/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeState } from '../../redux/actions'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Estado(props) {
  const dispatch = useDispatch()
  const [actualState, setActualState] = useState(props.props.state)

  function handleState(e) {
    dispatch(changeState({ id_ot: props.props.id_ot, state: e.target.name }))
    setActualState(e.target.name)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {actualState}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleState}
                  // onClick={e => props.props.handleState({ id_ot: props.props.id_ot, state: e.target.name })}
                  name='Pendiente'
                  className={classNames(
                    active ? 'w-full text-left bg-gray-100 text-gray-900' : 'text-gray-700',
                    'w-full text-left block px-4 py-2 text-sm'
                  )}
                >
                  Pendiente
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleState}
                  // onClick={e => props.props.handleState({ id_ot: props.props.id_ot, state: e.target.name })}
                  name='Resuelto'
                  className={classNames(
                    active ? 'w-full text-left bg-gray-100 text-gray-900' : 'text-gray-700',
                    'w-full text-left block px-4 py-2 text-sm'
                  )}
                >
                  Resuelto
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}