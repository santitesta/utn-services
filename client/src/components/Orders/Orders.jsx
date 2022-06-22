import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createOrder } from '../../redux/actions';

const Orders = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    console.log(data)
    dispatch(createOrder({
      id_inei: data.id_inei,
      motive: data.motive,
      commentary: data.commentary
    }))
    reset()
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
    </div>
  )
}

export default Orders