import React, { useState } from 'react'

function Dice() {

    const [actualDice, setActualDice ] = useState('../assets/images/dice3.png')
    
  return (
    <div>
        
        <img src={actualDice} alt="dice" />

    </div>
  )
}

export default Dice