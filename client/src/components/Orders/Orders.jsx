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
    <div>
      <h1>Orders site</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-3 grid justify-items-center content-start'>
        <input type="number" placeholder='Id del equipo...' {...register("id_inei")} />
        <input type="text" placeholder='Motivo...' {...register("motive")} />
        <input type="text" placeholder='Comentario...' {...register("commentary")} />
        <input type="submit" value='Crear orden' className='m-1' />
      </form>

      {orders?.length ?
        <div className="overflow-x-auto w-full z-50">
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