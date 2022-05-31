import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const todoText = useRef()
  const addTodo = (event) => {
    event.preventDefault()
    let newTodos = [...todos, todoText.current.value]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])
  }, [])
  return (
    <div className="App">
      <div className="bg-blue-700 flex flex-col justify-center w-full h-screen">
        <div className="container mx-auto max-w-screen-sm bg-white p-4 rounded shadow-2xl ">
          <h1 className="text-3xl font-bold uppercase text-blue-700 mb-4">
            React Todo list
          </h1>
          <ul className="list-disc ml-5">
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
          <div className="py-4">
            <form onSubmit={addTodo}>
              <input
                type="text"
                name="todo"
                id=""
                placeholder="Add todo here"
                ref={todoText}
              />
              <div className="flex flex-row space-x-2 mt-4">
                <button className="bg-blue-400 hover:bg-blue-600 text-white uppercase px-4 py-2.5 rounded">
                  Add Todo
                </button>
                <button className="bg-blue-600 hover:bg-blue-400 text-white uppercase px-4 py-2.5 rounded">
                  Clear all todos
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
