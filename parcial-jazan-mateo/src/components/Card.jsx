import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <h2>Persona</h2>
        <h4>{props.nombre}</h4>
        <h4>{props.apellido}</h4>
    </div>
  )
}
