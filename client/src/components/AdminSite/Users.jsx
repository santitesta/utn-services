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
    if (e.target.name === 'Admin') {
      await dispatch(changePermission({ email: e.target.id, institute: 'User' }))
      dispatch(getUsers())
    } else {
      await dispatch(changePermission({ email: e.target.id, institute: 'Admin' }))
      dispatch(getUsers())
    }
  }

  async function handleVerification(e) {
    e.preventDefault()
    if (e.target.innerText == 'false') {
      await dispatch(changeVerification({ email: e.target.id, verified: true }))
      dispatch(getUsers())
    } else {
      await dispatch(changeVerification({ email: e.target.id, verified: false }))
      dispatch(getUsers())
    }
  }

  return (
    <div>
      {users.length ?
        <div className="overflow-x-auto w-full z-50">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Name</th>
                <th>User type</th>
                <th>Permissions</th>
                <th>Verified</th>
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
                  <button id={u.email} name={u.institute} onClick={e => handlePermission(e)}>Change to {u.institute === 'Admin' ? 'User' : 'Admin'}</button>
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