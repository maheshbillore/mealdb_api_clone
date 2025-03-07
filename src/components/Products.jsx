import React from 'react' 
import ProductBox from './ProductBox'

const Products = () => {
    const productArr=[
        {
            id:1,
            name:"Apple",
            qty:5,
            price:150
        },
        {
            id:1,
            name:"Mango",
            qty:2,
            price:100
        },
        {
            id:1,
            name:"Orange",
            qty:4,
            price:200
        },
        {
            id:1,
            name:"graps",
            qty:6,
            price:300
        },
        {
            id:1,
            name:"papiya",
            qty:8,
            price:400
        },
    ]
    


  return  <div>
    <h1>Product list</h1>
     {
        productArr.map((product,index)=>{  
            return  <ProductBox key={index} props={product} />
        })
     }
  </div>
} 

export default Products