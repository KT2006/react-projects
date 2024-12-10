import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApeCard from './components/apeCard'

function App() {
  const [count, setCount] = useState(0)
  let newArr = [10,20,30,40]
  return (
    <>
      <h1 className='bg-blue-400 text-black text-center p-4 rounded-2xl mb-7' >kT is testing tailwind</h1>
      <ApeCard name= "kshitij's Ape"  />
      <ApeCard name="kTs Ape" apePrice = "22.032" />
        
    </>
  )
}

export default App
