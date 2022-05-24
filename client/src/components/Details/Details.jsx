import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getRecipeById } from '../../redux/actions';
import './Details.css'

function Details({id}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function newIp(id) {
      setLoading(true)
      await dispatch(getRecipeById(id))
      setLoading(false)
    } 
    if(id) {
      newIp(id)
    }
  },[dispatch,id])

  const recipe = useSelector(state => state.recipe)
  console.log('Recipe: ',recipe)
  if(!id) {
    return <p>How did you get here? Please send review! Anyways, come again with a recipe to get details!</p>
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log('Recipe steps: ',recipe.steps)
  return (
    <div className='detailsCont'>
      {
        !Object.keys(recipe).length?<h1 className='detailsLoading'>Loading...</h1>
        :<div className='detailsMiniCont'>
          <div className='detailsLeft'>
            <img src={recipe.image} alt={`${recipe.name} not found`} className='detailsImage'/>
            <p><span className='detailsLabels'>Dish types: </span>{!recipe.dishTypes || !recipe.dishTypes.length?'-':recipe.dishTypes}</p>
            <p><span className='detailsLabels'>Diets: </span>{recipe.diets?recipe.diets.join(' - '):'Not part of any diet registered'}</p>
            <p><span className='detailsLabels'>Spoonacular score: </span>{recipe.points?recipe.points:'-'}</p>
            <p><span className='detailsLabels'>Health score: </span>{recipe.healthScore?recipe.healthScore:'-'}</p>
            <NavLink to='/home' className='detailsReturn'>Return</NavLink>
          </div>
          <div className='detailsRight'>
            <h1 className='detTitle'>{recipe.name}</h1>
            <p className='detailsSummary' dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
            <div className='steps'>
              {
                recipe.steps
                ?<p>{recipe.steps}</p>
                :recipe.analyzedInstructions[0].steps.map(s => {
                  return (<p key={s.number}>Step {s.number}: {s.step}</p>)
                })
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
};
  
export default Details;