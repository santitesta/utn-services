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
    if (localStorage.user === 'm@m.com') {
      await dispatch(deleteUser(e.target.id))
      dispatch(getUsers())
    } else alert('Solo santi puede borrar usuarios :)')
  }

  async function handleVerification(e) {
    e.preventDefault()
    if (localStorage.user === 'm@m.com') {
      if (!e.target.checked) {
        await dispatch(changeVerification({ email: e.target.id, verified: false }))
        dispatch(getUsers())
      }
      else {
        await dispatch(changeVerification({ email: e.target.id, verified: true }))
        dispatch(getUsers())
      }
    } else alert('Solo santi puede cambiar permisos :)')
  }

  return (
    <div className='flex items-center w-full'>
      {users.length ?
        <div className="overflow-x-auto w-full z-50">
          <table className="m-auto shadow-md rounded-2xl bg-info table-auto w-11/12 text-md text-center text-gray-800">
            {/* <!-- head --> */}
            <thead className='h-12 text-gray-700'>
              <tr>
                <th className="border-r border-r-accent">Verificado</th>
                <th className="border-r border-r-accent">Apellido y Nombre</th>
                <th className="border-r border-r-accent">Email</th>
                <th className="border-r border-r-accent">Instituto</th>
                <th className="border-r border-r-accent">Departamento</th>
                <th className="border-r border-r-accent">Servicio</th>
                <th className="w-24">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => {
                return <tr key={u.email} className='bg-white border-b hover:bg-gray-200'>
                  <th className="font-thin py-1 border-r border-r-neutral items-center justify-center" >
                    <input id={u.email} type='checkbox' className="checkbox checkbox-sm checkbox-primary" checked={u.verified} onClick={handleVerification} />
                  </th>
                  <th className='font-thin pl-2 border-r border-r-neutral text-left'>
                    {u.nickname}
                  </th>
                  <th className='font-thin pl-2 border-r border-r-neutral text-left'>
                    {u.email}
                  </th>
                  <th className='font-thin border-r border-r-neutral'>
                    {u.institute}
                  </th>
                  <th className='font-thin border-r border-r-neutral'>
                    {u.department}
                  </th>
                  <th className='font-thin border-r border-r-neutral'>
                    {u.service}
                  </th>
                  <th>
                    {/* <button id={u.email} name={u.institute} onClick={e => handleDeletion(e)}>Eliminar</button> */}
                    <div>
                      <label for="modaleliminar" class="btn btn-xs btn-circle bg-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </label>

                      <input type="checkbox" id="modaleliminar" className="modal-toggle" />
                      <div class="modal">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">Esta a punto de eliminar un usuario</h3>
                          <p class="py-4">¿Esta seguro que desea eliminar al usuario XXX? Esta accion es irreversible.</p>
                          <div class="modal-action">
                            <label for="modaleliminar" class="btn">Aceptar</label>
                            <label for="modaleliminar" class="btn">Atrás</label>
                          </div>
                        </div>
                      </div>
                    </div>
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