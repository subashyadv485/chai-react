import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(15)

  const addvalue = () =>{
    if(counter < 20){
      setcounter(counter +1)
    }
  }
  const Removevalue = () =>{
    if(counter > 0){
      setcounter(counter  -1)
    }
  }
  

  return (
    <>
    <h1> count  {counter}</h1>
    <button onClick={addvalue}>addvalue</button>
    <br />
    <button onClick={Removevalue} >RemoveValue</button>
    </>
  )
}

export default App
