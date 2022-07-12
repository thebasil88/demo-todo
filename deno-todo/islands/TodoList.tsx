/** @jsx h */
import { h } from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { tw } from '@twind'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const todoText = useRef()
  const addTodo = (event) => {
    event.preventDefault()
    let newTodos = [...todos, todoText.current.value]
    setTodos(newTodos)
    todoText.current.value = ''
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const clearTodos = (event) => {
    event.preventDefault()
    setTodos([])
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])
  }, [])
  return (
    <div>
      <ul class={tw`list-disc ml-5`}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div class={tw`py-4`}>
        <div>
          <input
            type="text"
            name="todo"
            id=""
            placeholder="Add todo here"
            ref={todoText}
          />
          <div class={tw`flex flex-row space-x-2 mt-4`}>
            <button
              class={tw`bg-black hover:bg-yellow-300 hover:text-black text-white uppercase px-4 py-2.5 rounded`}
              onClick={addTodo}
            >
              Add Todo
            </button>
            <button
              class={tw`bg-gray-700 hover:bg-yellow-300 hover:text-black text-white uppercase px-4 py-2.5 rounded`}
              onClick={clearTodos}
            >
              Clear all todos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
