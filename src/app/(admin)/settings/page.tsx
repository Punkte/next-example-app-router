import NewTodoForm from '@/components/todos/NewTodoForm'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'AdminLayout',
  description: '...',

}
 

const SettingsPage = async () => {
  await new Promise(resolve => setTimeout(() => {
    resolve(null)
  }, 5000))
  return (
    <>
      <div>SettingsPage</div>
      <NewTodoForm />
    </>
  )
}

export default SettingsPage