import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className='container mx-auto p-4 bg-amber-50 w-[70%] my-5 rounded-xl min-h-[70vh]'>

        <div className = "addTodo">
          <h2 className='font-bold p-2 text-center font-serif'>Add a new Todo</h2>
          <div className = "addTodo flex justify-around">
            <input type="text" placeholder='Enter your task' className='w-[40%] p-2 rounded-md border-2' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Add</button>
          </div>

        </div>

        <div className="p-5">
          <h1 className="font-bold font-serif">Your Todos</h1>
          <div className="todos">
            <div className="todo flex justify-between items-center">
              <h3>Task 1</h3>
              <div className="todo-buttons">
                <button className='bg-blue-500 text-white p-2 rounded-md m-1'>Edit</button>
                <button className='bg-red-500 text-white p-2 rounded-md m-1'>Delete</button>
              </div>
            </div>
          </div>
            

          
        </div>
        

      </div>
    </>
  )
}

export default App
