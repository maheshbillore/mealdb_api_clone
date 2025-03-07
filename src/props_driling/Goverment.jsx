import React from 'react'
import Distics from './Distics';
import State from './IndState';

const Goverment = () => {
    const amount=1000;
  return  <>
  <div>Goverment Amount {amount}</div>
  <State amount={amount} /> 
  </>
}

export default Goverment