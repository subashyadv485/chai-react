import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'


function App() {

  return (
   <UserContextProvider>
    <h1>Hello! we are learning React Context API </h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
