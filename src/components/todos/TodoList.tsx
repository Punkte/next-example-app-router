import { Todo } from "@prisma/client"

const TodoList = ({todos}: {todos: Todo[]}) => {
  return (
    <>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </>
  )
}

export default TodoList