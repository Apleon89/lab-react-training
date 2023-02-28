import React, { useState } from 'react'

function Carousel(props) {

    const { images } = props

    let counter = 0

    console.log(counter);

    const [ actualImage, setActualImage ] = useState(images[counter])

    const rightImg = () => {

        
    }

    const leftImg = () => {

       
    }
  return (
    <div>

        <img src={actualImage} alt="" />
        <button onClick={leftImg}>left</button>
        <button onClick={rightImg}>right</button>

    </div>
  )
}

export default Carousel