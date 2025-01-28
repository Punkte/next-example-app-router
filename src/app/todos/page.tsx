import TodoList from '@/components/todos/TodoList'
import db from '@/frameworks/db'

const getTodos = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <div>TodosPage</div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage