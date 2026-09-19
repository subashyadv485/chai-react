import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('')

   const {setuser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setuser({username, password})
        
    }

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <input 
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
         placeholder='Username' />
         {"   "}
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         placeholder='Password'  />
         {"      "}
        <button 
        onClick={handleSubmit}
        >
        Submit</button>
      </div>
    </div>
  )
}

export default Login
