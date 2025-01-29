'use client'

import { getTodos } from "@/app/actions"
import type { Todo } from "@prisma/client"
import { useEffect, useState } from "react"


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const loadTodos = async (params: Parameters<typeof getTodos>[0] = {}) => {
    const todosFromDb = await getTodos(params)
    setTodos(todosFromDb)
  }

  useEffect(() => {
    loadTodos()
  }, [])
  return (
    <>
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() => loadTodos({})}
    >
      show all
    </button>
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() => loadTodos({where: {completed: true}})}
    >
      show completed
    </button>
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() => loadTodos({where: {completed: false}})}
    >
      show not completed
    </button>
    
      <ul>
        {todos.map(item => <li key={item.id}>
          <span>{item.completed? '✅ ' : '❌ '}{item.content}</span>
        </li>)}
      </ul>
    </>
  )
}

export default TodoList