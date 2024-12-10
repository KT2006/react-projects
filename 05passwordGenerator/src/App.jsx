import { useState, useCallback,useEffect } from 'react'

function App() {
  let [length, setLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password,setPassword] = useState("");

  const passwordGenerator  =useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*(){}"

    for(let i =1; i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])

  const copyToclipboard = ()=>{
    window.navigator.clipboard.writeText(password);
  }

    useEffect(() => {
    passwordGenerator()
  },[length,setCharAllowed,setNumAllowed,passwordGenerator])
  return (
    <>
    <div id="background" className='w-full  max-w-lg rounded-3xl text-xl text-white px-4 py-3 mx-auto my-28 bg-gray-600'>
      <h1 className='text-white text-center my-3 text-3xl' >Password Generator</h1>
      <div id="password-copy" className='flex shadow overflow-hidden mb-4' >
        <input type="text"
              placeholder='password'
              className=' outline-none w-full py-1 px-3  text-gray-500 rounded-md'
              value={password}
              readOnly
        />
        <button
         className='border-none bg-blue-500 rounded-md p-2 ml-1'
         onClick={copyToclipboard}
        >Copy</button>
      </div>
      <div id="bottom-div" className='flex gap-x-4 my-4' >
      <div id="length" className='flex items-center gap-x-2' >
            <input 
            type="range" 
            id="length-range"
            min={8}
            max={20}
            className='cursor-pointer'
            value={length}
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>length:{length}</label>
    </div>
    <div id="num-allowed" className='gap-x-1 flex' >
      <input 
      type="checkbox"
      defaultChecked = {numAllowed}
      onChange={(e)=>{
        setNumAllowed(prev => !prev)
      }}
       />
       <label>Numbers</label>
    </div>
    <div id="char-allowed" className='gap-x-1 flex' >
      <input 
      type="checkbox"
      defaultChecked = {charAllowed}
      onChange={(e)=>{
        setCharAllowed(prev => !prev)
      }}
       />
       <label>characters</label>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
