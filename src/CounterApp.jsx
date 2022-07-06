import { useState } from 'react'
import React from 'react'
//importando el modulo
import PropTypes from 'prop-types'

//rafc para que gestione el functional component de manera automatica

export const CounterApp = ({ value }) => {
 const [counter, setCounter] = useState(value);

   const handleAdd = event => setCounter(counter + 1)
   const handleSustract= event => setCounter(counter - 1)
   const handleClick = event => setCounter(value);

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={handleAdd}>
        +1
    </button>
    <button onClick={handleSustract}>
        -1
    </button>

    <button onClick={handleClick}>
        reset
    </button>
    </>
  )
}

//Definiendo el tipado del prop

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}
