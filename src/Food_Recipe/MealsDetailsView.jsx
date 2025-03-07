import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getMealDetails } from './server'

const MealsDetailsView = () => {
    const [mealData,setMealData] = useState([]); 
    const {id} = useParams();  
    const location = useLocation();
    const navigate = useNavigate(); 

    const getItemDetails = async ()=>{

        const result = await getMealDetails(id);
        setMealData(result[0]);
    }
    useEffect(()=>{
     getItemDetails();
    },[]); 

    const goback=()=>{
        navigate(-1);
    } 
    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        with: '1370px',
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: 'auto',
        alignItems: 'center',
        
    }
  return (
    <div style={styleObj} >
        <div>
            <img src={mealData.strMealThumb} width={'250px'} />
        </div>
        <h3>{mealData.strMeal}</h3>
        <p>{mealData.strInstructions}</p> 
        <Link to={'/meals'} >Back</Link>
        <button onClick={goback} >Go Back</button>
    </div>
  )
}

export default MealsDetailsView