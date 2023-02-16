import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Quiz } from "./EX4/EX4.2"
import {ButtonComponents} from "./Buttons/ButtonComponents"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz></Quiz>
      < ButtonComponents text={"important"} bold={"bold"}/>
      < ButtonComponents text={"No't important"} blod={""}/>
    </>
  )
}

export default App
