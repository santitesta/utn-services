import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCommentary, createOrder, getOrders, getOrdersByUser } from '../../redux/actions';
import { useEffect } from 'react';
import Estado from './Estado'

const Orders = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, reset: reset2 } = useForm();
  const orders = useSelector(state => state.orders)

  useEffect(() => {
    if (localStorage.institute === 'Admin') {
      dispatch(getOrders())
    } else {
      dispatch(getOrdersByUser(localStorage.user))
    }
  }, [dispatch])

  const onSubmit = async data => {
    await dispatch(createOrder({
      id_inei: data.id_inei,
      email: localStorage.user,
      motive: data.motive,
      commentary: data.commentary
    }))
    reset()
    if (localStorage.institute === 'Admin') {
      dispatch(getOrders())
    } else {
      dispatch(getOrdersByUser(localStorage.user))
    }
  };

  const onSubmitBro = async data => {
    await dispatch(addCommentary({
      id_ot: data.id_ot,
      commentary: data.commentaryUpdate
    }))
    reset2()
    if (localStorage.institute === 'Admin') {
      dispatch(getOrders())
    } else {
      dispatch(getOrdersByUser(localStorage.user))
    }
  };

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <div class="alert shadow-lg w-2/5 ml-3 mt-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>El equipo de UTN te dejará entrar pronto! Cuando te habiliten, cierra sesión e ingresa nuevamente con esta cuenta para tener acceso completo</span>
          </div>
        </div>
      </>
    )
  }

  if (!verified) {
    return (
      <div class="alert shadow-lg w-2/5 ml-3 mt-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Ingrese con su cuenta para ver sus equipos y crear órdenes</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center mb-10'>

      {/* Crear ordenes y agregar comentarios */}
      <div className='flex w-4/5 justify-between'>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5 p-3 w-2/5 gap-2 flex flex-col'>
          <div className='flex gap-2'>
            <input type="number" className='input input-bordered input-primary w-1/5 p-2' placeholder='Equipo' {...register("id_inei")} />
            <input type="text" className='input input-bordered input-primary w-4/5 max-w-xs' placeholder='Motivo...' {...register("motive")} />
          </div>
          <input type="text" className='input input-bordered input-primary w-full' placeholder='Comentario...' {...register("commentary")} />
          <input type="submit" value='Crear orden' className='btn btn-primary m-1 cursor-pointer' />
        </form>
        <div class="divider divider-horizontal"></div>
        <form onSubmit={handleSubmit2(onSubmitBro)} className='mt-5 p-3 w-2/5 gap-2 flex flex-col'>
          <div className='flex gap-2'>
            <input type="number" className='input input-bordered input-primary w-1/5 max-w-xs p-2' placeholder='OT' {...register2("id_ot")} />
            <input type="text" className='input input-bordered input-primary w-4/5 max-w-xs' placeholder='Comentario...' {...register2("commentaryUpdate")} />
          </div>
          <input type="submit" value='Agregar comentario' className='btn btn-primary m-1 cursor-pointer' />
        </form>
      </div>

      {/* Tabla de estados de ordenes */}
      {orders?.length ?
        <div className="mt-5 overflow-x-auto w-11/12 z-50">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Orden de trabajo</th>
                <th>Equipo</th>
                <th>Instituto</th>
                <th>Estado</th>
                <th>Motivo</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => {
                return <tr key={o.id_ot}>
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
                    {localStorage.institute === 'Admin' ?
                      <Estado props={{ id_ot: o.id_ot, state: o.state }} />
                      : o.state
                    }
                  </th>
                  <th className='font-thin'>
                    {o.motive}
                  </th>
                  <th className='font-thin'>
                    {o.commentary.map((c, i) => <p key={i}>{c}</p>)}
                  </th>
                </tr>
              })}
            </tbody>
          </table>
        </div >
        : <h1>No existen ordenes cargadas</h1>
      }
    </div>
  )
}

export default Orders