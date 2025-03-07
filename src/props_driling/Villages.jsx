import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'

const Villages = ({ amount }) => {
    const contextData = useContext(MoneyContext); 
    return <>
        <div className={contextData.contextCounter==1?'bg-success':'bg-danger'} >Villages Amount {contextData.amount} (get by context)  Receipt from Goverment</div>
        <div>Village amount This amount get by props diling {amount} Receipt from Goverment </div>
        <p>Context Counter {contextData.contextCounter}</p>
        <button onClick={() => { contextData.setContextCounter(contextData.contextCounter + 1) }} >Increment</button>
    </>
}

export default Villages