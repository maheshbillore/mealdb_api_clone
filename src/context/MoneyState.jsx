import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const amount =1000;
    const [contextCounter,setContextCounter] = useState(0);
    const contextObj={
        amount:1000,
        contextCounter,
        setContextCounter
    } 
  return  <>
  <MoneyContext.Provider value={contextObj} >{props.children}</MoneyContext.Provider>
  </>
}

export default MoneyState