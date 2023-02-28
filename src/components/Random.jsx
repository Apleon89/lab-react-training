import React from 'react'

function Random(props) {

const { min, max } = props

let randomNumber = Math.floor(Math.random() * max)

if (randomNumber < min) {
    randomNumber = min
}

  return (
    <div>
    
        <p> Random value between {min} and {max} => {randomNumber}</p>

    </div>
  )
}

export default Random