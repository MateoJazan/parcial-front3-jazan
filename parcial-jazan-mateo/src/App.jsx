import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [listaDePersonas, setListaDePersonas] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
  const [errorApellido, setErrorApellido] = useState("")

  const onChangeNombre = (e) =>{
    setNombre(e.target.value)

  }
  const onChangeApellido = (e) => {
    setApellido(e.target.value)
  }

  const nombreCheck = (nomb) =>{
    return !(nomb.length <3 || nomb[0]=== " ")

  }
  const apellidoCheck = (apell) =>{
    return apell.length > 5;
  }

  const onSubmitForm = (e) => {
    
    e.preventDefault()
    

    if (nombreCheck(nombre) && apellidoCheck(apellido)){
      
      setErrorNombre("")
      setErrorApellido("")
      setApellido("")
      setNombre("")
      //agrego al objeto que se mapea
    }
    else {
      setErrorNombre(nombreCheck(nombre) ? "" : "Error en el nombre")
      setErrorApellido(apellidoCheck(apellido) ? "" : "Error en el apellido")
    }
  }

  return (
    <div className ="App">
      <form onSubmit={onSubmitForm}>
        <label for="nombre">Nombre (minimo 3 caracteres y no puede comenzar con un espacio vacio)</label>
        <input 
          type="text"
          id="nombre"
          placeholder='Ingresa tu Nombre'
          value={nombre}
          onChange={onChangeNombre}
        />
        <p className='errorInput'>{errorNombre}</p>
        <label for="apellido">Apellido (minimo 6 caracteres)</label>
        <input 
          type="text"
          id="apellido"
          placeholder='Ingresa tu Apellido'
          value={apellido}
          onChange={onChangeApellido}
        />
        <p className='errorInput'>{errorApellido}</p>
        <button type="submit">Enviar</button>  
      </form>        
    </div>
  )
}

export default App
