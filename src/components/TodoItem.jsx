import React from 'react'

function TodoItem (props){
  return (
    <div>
      <input type="checkbox" checked={props.item.completed}/>
      {props.item.text}
    </div>
  )
}

export default TodoItem
