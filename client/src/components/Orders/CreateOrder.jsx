import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCommentary, createOrder } from '../../redux/actions';
import { motivos } from '../../utilities/motives'

const CreateOrder = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, reset: reset2 } = useForm();

  const onSubmit = async data => {
    const date = new Date()
    const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]
    if (!data.motive.length) alert('Falta un motivo para esta órden')
    else if (!data.id_inei) alert('Si no sabe el Nº UTN o no está inventariado aún, ingrese 0')
    else {
      await dispatch(createOrder({
        id_inei: data.id_inei,
        email: localStorage.user,
        motive: data.motive,
        commentary: `${day}/${month + 1} ${year} ${JSON.parse(localStorage.userFull).nickname}: ${data.commentary}`
      }))
      reset()
    }
  }

  const onSubmitBro = async data => {
    const date = new Date()
    const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]
    await dispatch(addCommentary({
      id_ot: data.id_ot,
      email: localStorage.user,
      commentary: `${day}/${month + 1} ${year} ${JSON.parse(localStorage.userFull).nickname}: ${data.commentaryUpdate}`
    }))
    reset2()
  };

  const verified = localStorage.verified

  if (verified === 'false') {
    return (
      <>
        <div className="alert shadow-lg w-2/5 ml-3 mt-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Ingrese con su cuenta para crear órdenes</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center mb-10'>
      {/* Crear ordenes y agregar comentarios */}
      <div className='flex w-4/5 justify-between'>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5 p-3 w-2/5 gap-2 flex flex-col'>
          {localStorage.institute === 'Admin' && <h1 className="alert shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            La creación de órdenes idealmente es para usuarios. Usar con discreción.</h1>
          }
          <div className='flex gap-2'>
            <input type="number" className='input input-bordered input-primary w-1/5 p-2' placeholder='Equipo' {...register("id_inei")} />
            <select className='select select-bordered select-primary w-4/5' {...register('motive')}>
              <option hidden value=''>Motivo de la orden</option>
              {motivos.map(m => {
                return <option key={m} value={m}>{m}</option>
              })}
            </select>
          </div>
          <input type="text" className='input input-bordered input-primary w-full' placeholder='Comentario...' {...register("commentary")} />
          <input type="submit" value='Crear orden' className='btn btn-primary m-1 cursor-pointer' />
        </form>

        <div className="divider divider-horizontal"></div>

        <form onSubmit={handleSubmit2(onSubmitBro)} className='mt-5 p-3 w-2/5 gap-2 flex flex-col'>
          <div className='flex gap-2'>
            <input type="number" className='input input-bordered input-primary w-1/5 max-w-xs p-2' placeholder='OT' {...register2("id_ot")} />
            <input type="text" className='input input-bordered input-primary w-4/5 max-w-xs' placeholder='Comentario...' {...register2("commentaryUpdate")} />
          </div>
          <input type="submit" value='Agregar comentario' className='btn btn-primary m-1 cursor-pointer' />
        </form>
      </div>

    </div>
  )
}

export default CreateOrder