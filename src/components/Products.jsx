import React from 'react'
import './Products.css'
//this is calleed destructuring
const Products = ({title,price=1 , features , obj}) => {
  let list = features.map((feature)=> <li>{feature}</li>)
  return (
    <div >
      <div className='body'>
        <div className='products'>
            <h1>{title}</h1>
            <p>{features}</p>
            <p>{obj.b}</p>
        </div>
        
        <div className='description'>
            <h2>{price }</h2>
        </div>
      </div>
        
      
    </div>
  )
}

export default Products
