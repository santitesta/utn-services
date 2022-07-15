import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, changePermission, changeVerification, deleteUser } from '../../redux/actions';

export default function Users() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  async function handleDeletion(e) {
    e.preventDefault()
    if (e.target.id === 'santi@mail.com') alert('No se puede borrar a Santi como usuario Root (Admin General)')
    if (localStorage.user === 'santi@mail.com') {
      await dispatch(deleteUser(e.target.id))
      dispatch(getUsers())
    } else alert('Solo santi puede borrar usuarios :)')
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
    <div className='flex items-center w-full'>
      {users.length ?
        <div className="overflow-x-auto w-full z-50">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Instituto</th>
                <th>Departamento</th>
                <th>Servicio</th>
                <th>Verificado</th>
                <th>Borrar usuario</th>
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
                  <th className='font-thin'>
                    {u.department}
                  </th>
                  <th className='font-thin'>
                    {u.service}
                  </th>
                  <th>
                    <label>
                      <button id={u.email} onClick={handleVerification}>{u.verified.toString()}</button>
                    </label>
                  </th>
                  <th>
                    <button id={u.email} name={u.institute} onClick={e => handleDeletion(e)}>Eliminar</button>
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