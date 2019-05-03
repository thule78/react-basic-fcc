import React from 'react'

function TodoItem (props){
  return (
    <div>
    <input type="check" checked={props.item.completed}/>
    <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
