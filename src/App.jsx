import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'    
import './App.css'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)



  useEffect(() => {
    const todosFromLs = localStorage.getItem("todos");
    if (todosFromLs) {
      setTodos(JSON.parse(todosFromLs));
    }
  }, []);

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  }      

  const handleEdit = (e,id)=>{
    let t = todos.filter(i=>i.id ===id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item=>{return item.id !==id;})
    setTodos(newTodos);
    saveToLs()
  }

  const handleDelete = (e,id)=>{
    let newTodos = todos.filter(item=>{return item.id !==id;})
    setTodos(newTodos);
    saveToLs()
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo,isCompleted: false}])
    setTodo("")
    saveToLs()
  }
  
  const handleCheckbox=(e)=>{
    let id = e.target.name;
    let index = todos.findIndex(iteam=>{return iteam.id === id;})
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;  
    setTodos(newTodos);
    saveToLs()
  }

  return (
    <>
      <Navbar />

      <div className='container mx-auto p-4 bg-amber-50 w-[70%] my-5 rounded-xl min-h-[70vh]'>

        <div className = "addTodo">
          <h1 className='font-bold p-2 text-green-800 text-2xl text-center font-serif'>MyTask : Plan. Prioritize. Perform.</h1>
          <h2 className='font-bold p-2 text-center font-serif'>Add a new Todo</h2>
          <div className = "addTodo flex justify-around">
            <input onChange={handleChange} value={todo} type="text" placeholder='Enter your task' className='w-[40%] p-2 rounded-md border-2' />
            <button onClick={handleAdd} disabled = {todo.length<=3} className='bg-blue-500 text-white p-2 rounded-md'>Add</button>
          </div>
        </div>
        
        <h1 className="font-bold font-serif">Your Todos</h1>

        <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='p-2' >Show Finished ToDos</label>
      
        {todos.length === 0 && <h2 className='text-center text-gray-500'>No Todos added yet</h2>}

        {todos.map(item=>{
        
          return (showFinished || !item.isCompleted) &&<div key= {item.id} className="p-1 todos">
            
            <div className="todo flex justify-between items-center">
              <div>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} className='mx-5'id="" />
                <h3 className={`${item.isCompleted ? "line-through" : ""} inline`}>{item.todo}</h3>
              </div>
              <div className="todo-buttons">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-blue-500 text-white p-1 rounded-md m-1'><FaRegEdit /> </button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-red-500 text-white p-1 rounded-md m-1'><RiDeleteBin2Fill /></button>
              </div>
            </div>
          </div>
        
        })}


      </div>
    </>
  )
}

export default App
