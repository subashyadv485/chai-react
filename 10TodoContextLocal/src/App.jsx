import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  //here, we know that we have to add a new todo, so we will use the setTodos function to update the state of todos by adding the new todo to the previous state of todos. We will use the spread operator to copy the previous state of todos and add the new todo to it. id: Date.now() is used to generate a unique id for the new todo. We will use the Date.now() function to generate a unique id for the new todo. The Date.now() function returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. This will ensure that each todo has a unique id.

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  // Here, we know that we have to update the todo with the given id, so we will use map to iterate over the todos and check if the id matches, if it does then we will return the new todo else we will return the previous todo.
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  // Here, we know that we have to delete the todo with the given id, so we will use filter to iterate over the todos and check if the id matches, if it does then we will return false else we will return true.
  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }
// Here, we know that we have to toggle the complete status of the todo with the given id, so we will use map to iterate over the todos and check if the id matches, if it does then we will return the updated todo else we will return the previous todo.Hre ...prevTodo means jo purana todo hai usme completed ka status change kar do, or ...prevTodo means jo purana todo hai usme baki sab data same rehne do.
  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo ) )
  }


  // Here, we know that we have to get the todos from the local storage when the component mounts, so we will use useEffect to run the code when the component mounts. We will use JSON.parse to convert the stringified todos back to an array of objects. We will check if the todos exist and if they do then we will set the state of todos to the todos from the local storage. We will also check if the length of the todos is greater than 0, if it is then we will set the state of todos to the todos from the local storage.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
// Here, we know that we have to save the todos to the local storage whenever the todos state changes, so we will use useEffect to run the code when the todos state changes. We will use JSON.stringify to convert the todos array of objects to a stringified format.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
           <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">

          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className='w-full' >
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
