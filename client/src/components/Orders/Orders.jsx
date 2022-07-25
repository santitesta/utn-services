import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeRefrigeration, getOrders, getOrdersByInstitute, getOrdersByPermission, getOrdersByUser } from '../../redux/actions';
import { useEffect } from 'react';
import Estado from './Estado'
import { institutes } from '../../utilities/institutes';
import { useState } from 'react';
import { motivos } from '../../utilities/motives'

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders)
  let [ordersFiltered, setOrdersFiltered] = useState([]);

  useEffect(() => {
    if (localStorage.institute === 'Admin') {
      dispatch(getOrders())
    } else if (localStorage.institute === institutes.INPB) {
      dispatch(getOrdersByInstitute(localStorage.institute))
    } else {
      dispatch(getOrdersByPermission(JSON.parse(localStorage.userFull)))
    }
  }, [dispatch])

  const filterInstitute = ins => {
    if (ins !== 'all') {
      setOrdersFiltered(orders.filter(o => o.device.instituto === ins))
    } else {
      setOrdersFiltered([])
    }
  }

  const filterState = state => {
    if (state !== 'all') {
      setOrdersFiltered(orders.filter(o => o.state === state))
    } else {
      setOrdersFiltered([])
    }
  }

  const filterMotive = motive => {
    if (motive !== 'all') {
      setOrdersFiltered(orders.filter(o => o.motive === motive))
    } else {
      setOrdersFiltered([])
    }
  }

  const filterRefrigeration = refrigeration => {
    let bool = refrigeration === 'true'
    if (refrigeration !== 'all') {
      setOrdersFiltered(orders.filter(o => o.refrigeration === bool))
    } else {
      setOrdersFiltered([])
    }
  }

  async function handleRefrigeration(e) {
    await dispatch(changeRefrigeration({ id_ot: e.target.id, refrigeration: e.target.checked }))
    dispatch(getOrders())
    setOrdersFiltered([])
  }

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <div className="alert shadow-lg w-2/5 ml-3 mt-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>El equipo de UTN te dejará entrar pronto! Cuando te habiliten, cierra sesión e ingresa nuevamente con esta cuenta para tener acceso completo</span>
          </div>
        </div>
      </>
    )
  }

  if (!verified) {
    return (
      <div className="alert shadow-lg w-2/5 ml-3 mt-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Ingrese con su cuenta para ver sus equipos y crear órdenes</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center mb-10'>
      {/* Tabla de estados de ordenes */}
      {orders?.length ?
        <div className="relative ">
          <table className="m-2 shadow-md rounded-2xl bg-info table-auto w-fit text-xs text-center text-gray-800">
            {/* <!-- head --> */}
            <thead className=' h-20 text-xs text-gray-700 '>
              <tr>
                <th className="py-1 px-1.4 w-16 border-r border-r-gray-400">Orden de trabajo</th>
                <th className="py-1 px-2 w-12 border-r border-r-gray-400">Equipo</th>
                <th className='py-1 px-2 w-12 border-r border-r-gray-400'>Instituto
                  {localStorage.institute === 'Admin' ?
                    <select className='form-select block text-xs text-gray-500 bg-white border border-solid border-slate-300 rounded
                    transition ease-in-out shadow-sm focus:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:secondary
                    focus:outline-none h-6 w-16 mt-2'
                      onChange={e => filterInstitute(e.target.value)}>
                      <option defaultValue value='all'>Todos</option>
                      <option value={institutes.CENDIE}>CENDIE</option>
                      <option value={institutes.CNCCB}>CNCCB</option>
                      <option value={institutes.CNGM}>CNGM</option>
                      <option value={institutes.MALBRAN}>MALBRAN</option>
                      <option value={institutes.INE}>INE</option>
                      <option value={institutes.INEI}>INEI</option>
                      <option value={institutes.INP}>INP</option>
                      <option value={institutes.INPB}>INPB</option>
                      <option value={institutes.UOCCB}>UOCCB</option>
                      <option value={institutes.UTNMDQ}>MDQ</option>
                    </select>
                    : null}
                </th>

                <th className="py-1 px-2 w-12 border-r border-r-gray-400">Departamento</th>
                <th className="py-1 px-2 w-12 border-r border-r-gray-400">Servicio</th>

                {localStorage.institute === 'Admin' ?
                  <th className="py-1 px-2 w-12 border-r border-r-gray-400">Refrig.
                    <select className='form-select block text-xs text-gray-500 bg-white border border-solid border-slate-300 rounded
                    transition ease-in-out shadow-sm focus:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:secondary
                    focus:outline-none h-6 w-16 mt-2'
                      onChange={e => filterRefrigeration(e.target.value)}>
                      <option defaultValue value='all'>Todos</option>
                      <option value={true}>Sí</option>
                      <option value={false}>No</option>
                    </select>
                  </th>
                  : null}

                <th className="py-1 px-4 w-12 border-r border-r-gray-400">Estado
                  {localStorage.institute === 'Admin' ?
                    <select className='form-select block text-xs text-gray-500 bg-white border border-solid border-slate-300 rounded
                    transition ease-in-out shadow-sm focus:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:secondary
                    focus:outline-none placeholder:h-6 w-32 mt-2'
                      onChange={e => filterState(e.target.value)}>
                      <option defaultValue value='all'>Todos</option>
                      <option value='Pendiente'>Pendiente</option>
                      <option value='En reparación'>En reparación</option>
                      <option value='Espera repuestos por UTN'>Espera repuestos por UTN</option>
                      <option value='Espera repuestos por Servicio'>Espera repuestos por Servicio</option>
                      <option value='Resuelto'>Resuelto</option>
                    </select>
                    : null}
                </th>

                <th className="py-1 px-3 w-12 border-r border-r-gray-400">Motivo
                  {localStorage.institute === 'Admin' ?
                    <select className='form-select block text-xs text-gray-500 bg-white border border-solid border-slate-300 rounded
                    transition ease-in-out shadow-sm focus:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:secondary
                    focus:outline-none h-6 w-32 mt-2'
                      onChange={e => filterMotive(e.target.value)}>
                      <option defaultValue value='all'>Todos</option>
                      {motivos.map(m => {
                        return <option key={m} value={m}>{m}</option>
                      })}
                    </select>
                    : null}
                </th>

                <th className="py-1 px-8 w-12 border-r border-r-gray-400">Creador</th>
                <th className="py-1 px-8 w-48">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {ordersFiltered.length ? ordersFiltered.map(o => {
                return <tr key={o.id_ot} className=''>
                  <th className='font-thin'>
                    {o.id_ot}
                  </th>
                  <th className='font-thin'>
                    {o.deviceIdInei}
                  </th>
                  <th className='font-thin'>
                    {o.device.instituto}
                  </th>
                  <th className='font-thin'>
                    {o.device.departamento}
                  </th>
                  <th className='font-thin'>
                    {o.device.servicio}
                  </th>
                  {localStorage.institute === 'Admin' ?
                    <th className='font-thin'>
                      <input id={o.id_ot} type='checkbox' className="checkbox checkbox-xs" checked={o.refrigeration} onChange={e => handleRefrigeration(e)} />
                    </th>
                    : null}
                  <th className='font-thin'>
                    {localStorage.institute === 'Admin' ?
                      <Estado props={{ id_ot: o.id_ot, state: o.state }} />
                      : o.state
                    }
                  </th>
                  <th className='font-thin'>
                    {o.motive}
                  </th>
                  <th className='font-thin'>
                    {o.userNickname}
                  </th>
                  <th className='font-thin'>
                    {o.commentary.map((c, i) => <p key={i}>{c}</p>)}
                  </th>
                </tr>
              })
                : orders.map(o => {
                  return <tr key={o.id_ot} className='bg-white border-b hover:bg-gray-100'>
                    <th className='font-thin py-10 border-r border-r-slate-200'>
                      {o.id_ot}
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.deviceIdInei}
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.device.instituto}
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.device.departamento}
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.device.servicio}
                    </th>
                    {localStorage.institute === 'Admin' ?
                      <th className='font-thin border-r border-r-slate-200'>
                        <input id={o.id_ot} type="checkbox" className='checkbox checkbox-sm checkbox-primary' checked={o.refrigeration} onChange={e => handleRefrigeration(e)} />
                      </th>
                      : null}
                    <th className='font-thin border-r border-r-slate-200'>
                      {localStorage.institute === 'Admin' ?
                        <Estado props={{ id_ot: o.id_ot, state: o.state }} />
                        : o.state
                      }
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.motive}
                    </th>
                    <th className='font-thin border-r border-r-slate-200'>
                      {o.userNickname}
                    </th>
                    <th className='font-thin'>
                      
                      <div className="m-auto rounded-md shadow hover:shadow-none w-32">
                        <label htmlFor="my-modal" className="transition ease-in-out active:scale-90 cursor-pointer w-32 h-8 flex items-center 
                        justify-center border border-transparent text-sm font-medium rounded-2xl text-white bg-blue-900
                        hover:bg-blue-800 active:bg-blue-700">Ver comentarios</label>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal ">
                          <div className="modal-box relative w-80 ">
                            <label htmlFor="my-modal" className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
                          </div>
                        </div>
                      </div>

                      {/* {o.commentary.map((c, i) => {
                        return <p key={i}>
                          <span className='font-bold'>{c.split(':')[0]}</span>
                          :{c.split(':')[1]}
                        </p>
                      })} */}

                    </th>
                  </tr>
                })}
            </tbody>
          </table>
        </div >
        : <h1>No existen ordenes cargadas</h1>
      }
    </div >
  )
}

export default Orders