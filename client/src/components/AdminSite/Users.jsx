import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePermission } from '../../redux/actions';

export default function Users() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const getUsers = () => {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/user`)
        .then(resp => dispatch({ type: 'GET_USERS', payload: resp.data }))
        .catch(error => console.log('Action error in getProducts: ', error))
    }
  }
  console.log(users)

  function handlePermission(e) {
    e.preventDefault()
    if (e.target.name === 'Admin') {
      dispatch(changePermission({ email: e.target.id, institute: 'User' }))
    } else {
      dispatch(changePermission({ email: e.target.id, institute: 'Admin' }))
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>Refresh users</button>
      <div className="overflow-x-auto w-full z-50">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Permissions</th>
              <th>User type</th>
            </tr>
          </thead>
          <tbody>
            {users.length ?
              users.map(u => {
                return <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div> */}
                      <div>
                        <div className="font-bold">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <th>
                    <button id={u.email} name={u.institute} onClick={e => handlePermission(e)}>Change to {u.institute === 'Admin' ? 'User' : 'Admin'}</button>
                  </th>
                  <td>
                    {u.institute}
                  </td>
                </tr>
              })
              : <p>wuachin</p>
            }
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Permissions</th>
              <th>User type</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};