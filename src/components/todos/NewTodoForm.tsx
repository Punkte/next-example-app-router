import { createTodo } from "@/app/actions"

const NewTodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input name="content" type="text" className="text-black" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
 
export default NewTodoForm