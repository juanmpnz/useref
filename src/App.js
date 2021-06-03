import React from 'react'
import FocusApp from './FocusApp'
import CopyApp from "./CopyApp"

function App() {
  return (
    <div>
      <h1>Use Ref</h1>
      <p>useRef tiene dos usos, el primeros es la interaccion con el DOM y el segundo es ser una referencia mutable,una varaible que mantendra su estado entre renderisaciones pero que cuando se modifique su valor, no va a generar un render.</p>
      <hr/>
      <FocusApp/>
      <br/>
      <br/>
      <hr/>
      <CopyApp/>
      
    </div>
  )
}

export default App

