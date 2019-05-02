import React from 'react'

function Product (props){
  return(
    <div>
      <p>Name: {props.name}</p>
      <p>Price:${props.price}</p>
      <p>{props.description}</p>
    </div>
    )
}

export default Product
