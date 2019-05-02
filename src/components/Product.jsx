import React from 'react'

function Item (props){
  return(
    <div>
      <p>Name: {props.item.name}</p>
      <p>Price:${props.item.price}</p>
      <p>{props.item.description}</p>
    </div>
    )
}

export default Item
