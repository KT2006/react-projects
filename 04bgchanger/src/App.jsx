import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("black")
  return (
    <>
      <div id='page' className="w-screen min-h-screen duration-300"
        style={{backgroundColor:color}}
      >
        <div id='navbar' className='fixed flex flex-wrap bottom-12 justify-center inset-x-0  px-2' >
          <div id='navcontent' className='flex flex-wrap justify-center bg-white shadow-xl gap-3 px-3 py-2 rounded-3xl' >
                    <button className='px-5 py-2 rounded-2xl shadow-lg text-white' 
                    style={{backgroundColor:"red"}}
                    onClick={()=> setColor("red")}
                    >
                      Red
                    </button>

                    <button className='px-5 py-2 rounded-2xl shadow-lg text-white' 
                    style={{backgroundColor:"blue"}}
                    onClick={()=> setColor("blue")}
                    >
                      Blue
                    </button>

                    <button className='px-5 py-2 rounded-2xl shadow-lg  text-white'  
                    style={{backgroundColor:"green"}}
                    onClick={()=>setColor("green")}
                    >
                      Green
                    </button>

                    <button className='px-5 py-2 rounded-2xl shadow-lg  text-white' 
                    style={{backgroundColor:"purple"}}
                    onClick={()=> setColor("purple")}
                    >
                      Purple
                    </button>

                    <button className='px-5 py-2 rounded-2xl shadow-lg text-white' 
                    style={{backgroundColor:"orange"}}
                    onClick={()=> setColor("orange")}
                    >
                      Orange
                    </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
