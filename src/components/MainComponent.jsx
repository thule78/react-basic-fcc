import React from 'react'

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


  return (
    <div>
    <p>Today: {`${getdate}`}</p>
      <h3>Your todo list of this {`${timeOfDay}`}</h3>
      <div>
        <input type="checkbox" />
        <p> 2 hours lesson </p>
        <input type="checkbox" />
        <p> 1 hour yoga class</p>
      </div>
    </div>
    )
}

export default MainComponent
