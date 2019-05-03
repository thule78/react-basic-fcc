import React from 'react'

function TodoItem (props){

  return(
    <input type="checkbox" checked={props.item.completed} />
    {props.item.text}
    )
}

export default TodoItem
