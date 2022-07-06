import React from 'react'
import PropTypes from 'prop-types';

// let saludo= ()=> "Hola, que tal?"
export const FirstApp = ({title, subtitle, name}) => {

  return (
    <>
        <h2>{title}</h2>
        <p>Soy ingeniera en software</p>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  name: 'Dhanibel Reyes',
  title: 'No hay titulo',
  subtitle: 'No se ha introducido subtitulo'
}