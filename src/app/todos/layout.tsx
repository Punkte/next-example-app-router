import NewTodoForm from '@/components/todos/NewTodoForm'

const TodoLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div>TodoLayout</div>
      <NewTodoForm />
      {children}
    </div>
  )
}

export default TodoLayout