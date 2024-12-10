import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  let addValue = ()=>{
    counter++;
    setCounter(counter);
  }
  let removeValue = () =>{
    counter--;
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <br />
      <button
        onClick={addValue}
      >Increment value: {counter}</button>
      <br />
      <button 
        onClick={removeValue}
      > Decrement value: {counter}</button>


      <h2>Footer: {counter}</h2>
    </>

  )
}

export default App
