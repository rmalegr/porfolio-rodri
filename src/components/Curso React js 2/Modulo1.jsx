import React from 'react'
//Curso de React js
import './modulo.css'

const Modulo1 = () => {
  return (
    <div>
      <h1>Curso Repaso React</h1>
      <hr />
      <User name="Juan" age="25" email="<EMAIL>" />
      <User name="Pedro" age="26" email="<EMAIL>" />    

     </div>
  )
}
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>

  )
}

export default Modulo1