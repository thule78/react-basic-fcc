import React from 'react'

import ListItem from './ListItem'
import ContactCard from './ContactCard'
import Joke from './Joke'

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
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div>
        <Joke question= 'What is the name of the last King'
        answer= "it's me" />
        <Joke question= ''
        answer= "I don't know"/>
        <Joke question= 'How to say 55555 in Thai?'
        answer= " "/>
      </div>
      <div>
        <ContactCard
          contact = {{imgURL: "https://picsum.photos/200", name: "Thule", phone: "090-234-5678", email: "abc@gmail.com"}}
         />
      </div>
    </div>
    )
}

export default MainComponent
