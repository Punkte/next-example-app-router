'use client'

import { createTodo } from "@/app/actions"
import { useActionState } from "react"
import Input from "../form/Input"

export type TodoFormState = {
  content: {value: string, errors?: string[]}
}

const NewTodoForm = () => {
  const [{content: {value, errors}}, formAction, isPending] = useActionState<TodoFormState,FormData>(createTodo, {content: {value: ''}})
  return (
    <div>
      <form action={formAction}>
        <Input name='content' defaultValue={value} errors={errors}  />
        <button type="submit">{isPending ? 'loading' : 'submit'}</button>
      </form>
    </div>
  )
}
 
export default NewTodoForm