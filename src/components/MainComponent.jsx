import React from 'react'

import ListItem from './ListItem'
import ContactCard from './ContactCard'
import Joke from './Joke'
import jokesData from './JokesData'
import Product from './Product'
import products from './ProductData'


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

  const jokeComponents = jokesData.map((joke)=> {
    return (
      <Joke key={joke.id} question={joke.question} answer={joke.answer}/>
      )
  })

  const productComponents = products.map((product) =>{
    return (
      <Product key={product.id} name={product.name} price={product.price} description={product.description} />
      )
  })


  return (
    <div>
    <p>Today: {`${getdate}`}</p>
      <h3>Your todo list of this {`${timeOfDay}`}</h3>
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <hr />
      <div>
          {jokeComponents}
      </div>
      <hr />
      <div>
        {productComponents}
      </div>
      <hr />
      <div>
        <ContactCard
          contact={{
            name: "ThuLe",
            imgURL: "https://picsum.photos/200",
            phone: "090-123-5678",
            email: "abc@gmail.com"}} />
      </div>
    </div>
    )
}

export default MainComponent
