import React from 'react'

const ProductBox = ({props}) => { 
    const {id,name,price,qty} = props; 
    const styleObj={
        backgroundColor:'blue',
        color:'white',
        border:'2px',
        borderRadius:'5px',
        padding:'5px',
        margin:'4px',
        align:'center',
    }
  return (
    <div style={styleObj} className='cart_div' >
         <p>Name {name}</p>
         <p>Price {price}</p>
         <p>Quantity {qty}</p> 
    </div>
  )
}

export default ProductBox