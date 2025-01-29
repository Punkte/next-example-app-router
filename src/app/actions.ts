'use server'

import { TodoFormState } from '@/components/todos/NewTodoForm'
import db from '@/frameworks/db'
import { revalidatePath } from 'next/cache'

export const createTodo = async (prevState: TodoFormState, formData: FormData) => {
  const content = formData.get('content')

  if (typeof content !== 'string' || content.length < 10) {
    return {
      content: {value: content as string, errors: ['content is not valid']}
    } satisfies TodoFormState
  }

  await db.todo.create({
    data: {content}
  })

  revalidatePath('/todos')
  return prevState
}