import React from 'react'

import TodoItem from './TodoItem'
import todoData from './TodoData'


function MainComponent (){
  const date = new Date()
  const yyyy =  date.getFullYear()
  const mm = ("0"+(date.getMonth()+1)).slice(-2)
  const dd = ("0"+date.getDate()).slice(-2)
  const getdate = dd+'-'+mm+'-'+yyyy
  const hours = date.getHours()
  let timeOfDay
    if (hours < 12){
      timeOfDay = "Morning"
    } else if (hours >=12 && hours < 17){
      timeOfDay = "Afternoon"
    }else {
      timeOfDay = "Evening"
    }

  const todoItem = todoData.map((item)=>{
    return (
      <TodoItem key={item.id} item={item}/>
      )
  })


  return (
    <div>
    <p>Today: {`${getdate}`}</p>
      <h3>Your todo list of this {`${timeOfDay}`}</h3>
      <div>
        {todoItem}
      </div>
    </div>
    )
}

export default MainComponent
