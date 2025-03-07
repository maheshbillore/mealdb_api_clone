import React from 'react'
import Blocks from './Blocks'

const Distics = ({amount}) => {
    console.log(amount,'amount'); 
  return  <>
  <div>Distics</div>
  <Blocks amount={amount} />
  </>
}

export default Distics