import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState
  (false)
  const [password, setpassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){
      str += "0123456789"
    }
    if(charAllow){
      str += "!@#$%^&*-_+=~'[]{}()"
    }
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberAllow, charAllow,setpassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3' > password Generator</h1>
    <div className='flex shadow-mid rounded-lg overflow-hidden mb-4'>
      <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3  bg-white text-black'
        placeholder='password'
        readOnly
        ref={passwordRef}
       />
      <button
      onClick= {copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-[#AB03A9] transition duration-500 cursor-pointer'
      >copy</button> 
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setlength(e.target.value)}}
        />
        <label>length: {length} </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {numberAllow}
        id='numberInput'
        onChange={() => {setnumberAllow((prev) => !prev)}}
         />
         <label htmlFor="numberInput"> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {charAllow}
        id='characterInput'
        onChange={() => {setCharAllow((prev) => !prev)}}
         />
         <label htmlFor="character">Characters</label>
      </div>
      
    </div>
   </div>
   </>
  )
}

export default App
