import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Quiz } from "./EX4/EX4.2"
import {ButtonComponents} from "./Buttons/ButtonComponents"
import {data} from "./DataCards/Data";
import {ShowData} from "./DataCards/ShowData";
function App() {
  const [CardData, setCardData] = useState(data)
  
  return (
    <>
      <Quiz></Quiz>
      < ButtonComponents text={"important"} bold={"bold"}/>
      < ButtonComponents text={"No't important"} blod={""}/>
      <ShowData data={CardData}/>
    </>
  )
}

export default App
