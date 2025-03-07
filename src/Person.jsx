import React from 'react'
import {Skils} from './Skils'

function Person() { 
    const personObj={
        firstname:"mahesh",
        lastname:"billore",
        age:35,
        profestional:"software Engineer",
        technologic:"React js"
      } 
  return ( 
    <div>
    <h1>Personal Infromation</h1>
    <p>{personObj.lastname}</p>
    <p>{personObj.lastname}</p> 
    <p>{personObj.age}</p>
    <p>{personObj.profestional}</p>
    <p>{personObj.technologic}</p>
     <Skils/>
  </div>
  )
}

export default Person