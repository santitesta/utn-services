import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe } from "../../redux/actions"
import './Create.css'
import { validate } from '../../Misc/validate'

function Create() {
  const dispatch = useDispatch();
  const diets = useSelector(state => state.diets)

  const [recipe, setRecipe] = useState({})
  const [dietrec, setDietrec] = useState([])
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault()
    if(Object.keys(errors).length) {
      return alert('The form is not right, please check the errors')
    }
    let newRec = {...recipe, diet: dietrec.map(d => parseInt(d))}
    dispatch(createRecipe(newRec))
    document.getElementById('101').reset()
    setDietrec([])
  }

  function handleChange(e) {
    let item = e.target.name

    if(item === 'name' || item === 'points' || item === 'healthness') {
      setErrors(validate({...recipe, [item]:e.target.value }, item))
      setRecipe({...recipe, [item]:e.target.value})
    } else {
      setRecipe({...recipe, [item]:e.target.value})
    }
  }

  function handleDiets(e) {
    if(e.target.value == 0) return;
    if (!dietrec.includes(e.target.value)) {
      setDietrec([...dietrec, e.target.value])
    }
  }

  function handleDelete(e) {
    e.preventDefault()
    setDietrec(dietrec.filter(d => d != e.target.value))
  }

  return (
    <form className='condet' type="submit" id='101'>

      <div className='createleft'>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Name</label>
          </div>
          <div className='formInput'>
            <input className='inputsc' onChange={e => handleChange(e)} type="text" id='' name='name' placeholder='Name your recipe...' />
          </div>
          <div className='formErrors'>
            {errors.name?<p className='errorsp'>{errors.name}</p>:null}
          </div>
        </div>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Summary</label>
          </div>
          <div className='formInput'>
            <input className='summaryInput' onChange={e => handleChange(e)} type='text' name='summary' placeholder='Whats the deal?...'/>
          </div>
          <div className='formErrors'>
            {errors.summary?<p className='errorsp'>{errors.summary}</p>:null}
          </div>
        </div>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Score</label>
          </div>
          <div className='formInput'>
            <input className='inputsc' onChange={e => handleChange(e)} type="number" id='' name='points' placeholder='Score out of 100...' />            
          </div>
          <div className='formErrors'>
            {errors.points?<p className='errorsp'>{errors.points}</p>:null}
          </div>
        </div>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Healthness</label>
          </div>
          <div className='formInput'>
          <input className='inputsc' onChange={e => handleChange(e)} type="number" id='' name='healthness' placeholder='Score out of 100...' />            
          </div>
          <div className='formErrors'>
            {errors.healthness?<p className='errorsp'>{errors.healthness}</p>:null}
          </div>
        </div>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Image</label>
          </div>
          <div className='formInput'>
            <input className='inputsc' onChange={e => handleChange(e)} type="text" id='' name='image' placeholder='Insert image as url...' />
          </div>
          <div className='formErrors'/>
        </div>

        <div className='minicont'>
          <div className='formLabel'>
            <label className='insideLabel'>Diets</label>
          </div>
          <div className='formInput'>
            <select className='inputsc' name='diets' onChange={e => handleDiets(e)}>
              <option defaultValue={true} value={0}>Choose your diet!</option>
              {diets.map(d => {
                return <option key={d.id} value={d.id} className={dietrec.includes(`${d.id}`)?'dietchose':'dietunchose'}>
                  {d.id}.{d.name}
                </option>
              })}
            </select>
          </div>
          <div className='formErrors'/>
        </div>

        {
          !dietrec.length
          ?<div className='minicont'>
            <div className='delete'>
              <p>No diets chosen</p>
            </div>
          </div>
          :<div className='minicont'>
            <div className='delete'>
              {dietrec.map(d => {
                return (<div key={d}>
                  <button className='deleteBtn' value={d} onClick={e => handleDelete(e)}>
                    {d}<span className='deleteX'>X</span>
                  </button>
                </div>)
              })}
            </div>
          </div>
        }

      </div>
      
      <div className='createright'>
        <div className='createbottom'>

          <div>
            <textarea className='textarea' name="steps" id="" onChange={e => handleChange(e)} placeholder='Specify the step by step...'></textarea>
          </div>

          <button className='submitbutton' type="submit" onClick={e => handleSubmit(e)}>
            Create Recipe!
          </button>

        </div>
      </div>
    </form>
  );
};

export default Create;