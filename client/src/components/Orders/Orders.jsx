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
  let [ordersFiltered, setOrdersFiltered] = useState();
  let newOrders = orders;

  let [ins, setIns] = useState();
  let [state, setState] = useState();
  let [motive, setMotive] = useState();
  let [refrigeration, setRefrigeration] = useState();

  useEffect(() => {
    setOrdersFiltered(orders)
    if (ordersFiltered) {
      filterAll()
    }
  }, [orders, ins, state, motive, refrigeration])


  useEffect(() => {
    if (localStorage.institute === 'Admin') {
      dispatch(getOrders())
    } else if (localStorage.institute === institutes.INPB) {
      dispatch(getOrdersByInstitute(localStorage.institute))
    } else {
      dispatch(getOrdersByPermission(JSON.parse(localStorage.userFull)))
    }
  }, [dispatch])

  function filterAll() {
    let aux = []
    if (orders) {
      orders.forEach(element => {
        aux.push(element)
      })
    };

    if (ins) newOrders = aux.filter(o => o.device.instituto === ins)
    if (refrigeration === false || refrigeration === true) newOrders = newOrders.filter(o => o.refrigeration === refrigeration)
    if (state) newOrders = newOrders.filter(o => o.state === state)
    if (motive) newOrders = newOrders.filter(o => o.motive === motive)

    if (newOrders.length) {
      setOrdersFiltered(newOrders)

    } else {
      setOrdersFiltered([])
    }
  }

  const filterInstitute = ins => {
    setIns(ins)
  }

  const filterState = state => {
    setState(state)
  }

  const filterMotive = motive => {
    setMotive(motive)
  }

  const filterRefrigeration = refrigeration => {
    let bool = refrigeration === 'true'
    setRefrigeration(bool)
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>El equipo de UTN te dejar?? entrar pronto! Cuando te habiliten, cierra sesi??n e ingresa nuevamente con esta cuenta para tener acceso completo</span>
          </div>
        </div>
      </>
    )
  }

  if (!verified) {
    return (
      <div className="alert shadow-lg w-2/5 ml-3 mt-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Ingrese con su cuenta para ver sus equipos y crear ??rdenes</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center mb-10'>
      {/* Tabla de estados de ordenes */}
      {orders?.length ?
        <div className="mt-5 overflow-x-auto w-11/12 z-50">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Orden de trabajo</th>
                <th>Equipo</th>

                <th className='flex flex-col items-center'>Instituto
                  {localStorage.institute === 'Admin' ?
                    <select className='select select-xs h-3' onChange={e => filterInstitute(e.target.value)}>
                      <option defaultValue value=''>Todos</option>
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

                <th>Departamento</th>
                <th>Servicio</th>

                {localStorage.institute === 'Admin' ?
                  <th>Refrigeraci??n
                    <select className='select select-xs h-3' onChange={e => filterRefrigeration(e.target.value)}>
                      <option defaultValue value=''>Todos</option>
                      <option value={true}>S??</option>
                      <option value={false}>No</option>
                    </select>
                  </th>
                  : null}

                <th>Estado
                  {localStorage.institute === 'Admin' ?
                    <select className='select select-xs h-3' onChange={e => filterState(e.target.value)}>
                      <option defaultValue value=''>Todos</option>
                      <option value='Pendiente'>Pendiente</option>
                      <option value='En reparaci??n'>En reparaci??n</option>
                      <option value='Espera repuestos por UTN'>Espera repuestos por UTN</option>
                      <option value='Espera repuestos por Servicio'>Espera repuestos por Servicio</option>
                      <option value='Resuelto'>Resuelto</option>
                    </select>
                    : null}
                </th>

                <th>Motivo
                  {localStorage.institute === 'Admin' ?
                    <select className='select select-xs h-3' onChange={e => filterMotive(e.target.value)}>
                      <option defaultValue value=''>Todos</option>
                      {motivos.map(m => {
                        return <option key={m} value={m}>{m}</option>
                      })}
                    </select>
                    : null}
                </th>

                <th>Creador</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {ordersFiltered?.length ? ordersFiltered.map(o => {
                return <tr key={o.id_ot} className='hover'>
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
                      <input id={o.id_ot} type="checkbox" className='checkbox' checked={o.refrigeration} onChange={e => handleRefrigeration(e)} />
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
                : <p>No existen ??rdenes con esos filtros</p>
              }
            </tbody>
          </table>
        </div >
        : <h1>No existen ordenes cargadas</h1>
      }
    </div >
  )
}

export default Orders