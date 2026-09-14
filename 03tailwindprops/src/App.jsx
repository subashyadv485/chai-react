import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "subash002",
    age: 21
  }
  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <Card  userName= "subash" btntext = "Thank you!" />
      <Card userName= "Introduction"  />
    </>
  )
}

export default App
