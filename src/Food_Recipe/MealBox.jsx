import React from 'react'
import { Link } from 'react-router-dom';

const MealBox = ({data}) => {
  const {idMeal,strMeal,strMealThumb} = data;
  const styleObj={
    border:'1px solid blue',
    borderRadius:'10px'
  }
  return (
    <div style={styleObj}  className='cart_div'>
        <Link to={idMeal} >
        <div><img src={strMealThumb} width={'250px'} /></div>
        <p>{strMeal}</p>
        </Link>
    </div>
  ) 
}

export default MealBox