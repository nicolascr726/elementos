import { useState } from 'react'
import './App.css'
import { Registro } from './assets/components/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Registro/>
      </div>
    </>
  )
}

export default App
