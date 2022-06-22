import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createOrder, getOrders } from '../../redux/actions';
import { useEffect } from 'react';

const Orders = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();
  const orders = useSelector(state => state.orders)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  const onSubmit = async data => {
    await dispatch(createOrder({
      id_inei: data.id_inei,
      motive: data.motive,
      commentary: data.commentary
    }))
    reset()
    dispatch(getOrders())
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 p-3 bg-emerald-700 w-64 grid justify-items-center content-start'>
        <input type="number" className='border-2 border-black' placeholder='Id del equipo...' {...register("id_inei")} />
        <input type="text" className='border-2 border-black' placeholder='Motivo...' {...register("motive")} />
        <input type="text" className='border-2 border-black' placeholder='Comentario...' {...register("commentary")} />
        <input type="submit" value='Crear orden' className='m-1' />
      </form>

      {orders?.length ?
        <div className="mt-5 overflow-x-auto w-11/12 z-50 bg-blue-500">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Orden de trabajo</th>
                <th>Equipo</th>
                <th>Estado</th>
                <th>Motivo</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => {
                return <tr>
                  <th className='font-thin'>
                    {o.id_ot}
                  </th>
                  <th className='font-thin'>
                    {o.id_inei}
                  </th>
                  <th className='font-thin'>
                    {o.state}
                  </th>
                  <th className='font-thin'>
                    {o.motive}
                  </th>
                  <th className='font-thin'>
                    {o.commentary}
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