import React, { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {

    const [actualDice, setActualDice ] = useState(dice3)
    
    const getRandomDice = () => {
      setActualDice(diceEmpty)
      setTimeout(() => {
        const randomNumber = Math.ceil(Math.random() * 6)
        switch(randomNumber) {
          case 1:
            setActualDice(dice1);
            break;
          case 2:
            setActualDice(dice2);
            break;
          case 3:
            setActualDice(dice3);
            break;
          case 4:
            setActualDice(dice4);
            break;
          case 5:
            setActualDice(dice5);
            break;
          case 6:
            setActualDice(dice6);
            break;
          default:          
        }
      }, 1000)
    }

  return (
    <div>
        
        <img style={{
          width:'300px'
        }} src={actualDice} alt="dice" onClick={getRandomDice}/>

    </div>
  )
}

export default Dice