'use server'

import db from '@/frameworks/db'
import { revalidatePath } from 'next/cache'

export const createTodo = async (formData: FormData) => {
  const content = formData.get('content')

  if (typeof content !== 'string') throw new Error('content is not a string')

  await db.todo.create({
    data: {content}
  })

  revalidatePath('/todos')
}