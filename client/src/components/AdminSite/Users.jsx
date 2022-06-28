import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, changePermission, changeVerification } from '../../redux/actions';

export default function Users() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  async function handlePermission(e) {
    e.preventDefault()
    if(e.target.id === 'santi@mail.com') alert('No se puede quitar el permiso de Santi como usuario Root (Admin General)')
    if (localStorage.user === 'santi@mail.com') {
      if (e.target.name === 'Admin') {
        await dispatch(changePermission({ email: e.target.id, institute: 'User' }))
        dispatch(getUsers())
      } else {
        await dispatch(changePermission({ email: e.target.id, institute: 'Admin' }))
        dispatch(getUsers())
      }
    } else alert('Solo santi puede cambiar permisos :)')
  }

  async function handleVerification(e) {
    e.preventDefault()
    if (localStorage.user === 'santi@mail.com') {
      if (e.target.innerText === 'false') {
        await dispatch(changeVerification({ email: e.target.id, verified: true }))
        dispatch(getUsers())
      } else {
        await dispatch(changeVerification({ email: e.target.id, verified: false }))
        dispatch(getUsers())
      }
    } else alert('Solo santi puede cambiar permisos :)')
  }

  return (
    <div>
      {users.length ?
        <div className="overflow-x-auto w-full z-50">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Instituto</th>
                <th>Permisos</th>
                <th>Verificado</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => {
                return <tr key={u.email}>
                  <th className='font-thin'>
                    {u.email}
                  </th>
                  <th className='font-thin'>
                    {u.institute}
                  </th>
                  <th>
                    <button id={u.email} name={u.institute} onClick={e => handlePermission(e)}>Cambiar {u.institute === 'Admin' ? 'User' : 'Admin'}</button>
                  </th>
                  <th>
                    <label>
                      <button id={u.email} onClick={handleVerification}>{u.verified.toString()}</button>
                    </label>
                  </th>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        : <h1>No existen usuarios cargados</h1>
      }
    </div>
  );
};