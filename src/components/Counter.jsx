import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0);
    const ClickHander=(props)=>{ 
       if(props=='Inc'){  
        // const counterInc=counter+1;
        setCounter(counter+1);
       }else if(props=='Dec'){ 
        // const counterDec=counter-1;
        setCounter(counter-1); 
       }
    }
  return (
    <div>
        <h1>Counter Result: {counter}</h1>
        <button onClick={()=>ClickHander('Inc')} >Increment</button>
        <button onClick={()=>ClickHander('Dec')} >Decrement</button>
    </div>
  )
}

export default Counter