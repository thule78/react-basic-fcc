import React from 'react'

function Joke (props){
  return (
    <div>
      <h3 style={{display: props.question ? "block" : "none"}}>Question:{props.question}</h3>
      <h4 style={{color: props.answer ? "#888" : "none"}}>Answer:{props.answer}</h4>
    </div>

    )
}

export default Joke
