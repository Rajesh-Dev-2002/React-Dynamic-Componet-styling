import React from 'react'
import Products from './Products'

const ProductsTabs = () => {
  let features = [<li>iPhone</li>,<li>Xiaomi</li>,<li>Nokia</li>]
  let obj = {a:"BHU" , b:"JNU"}
  return (
    <div>
        <Products title ="SuperMan" price = {1000} features = {features} obj= {obj}/>
        <Products title ="Monstar" price = {500} features = {features} obj= {obj}/>
        <Products title ="IronMan" features = {features} obj= {obj} />
       
      
    </div>
  )
}

export default ProductsTabs
