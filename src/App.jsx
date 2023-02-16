import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Quiz } from "./EX4/EX4.2"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz></Quiz>
    </>
  )
}

export default App
