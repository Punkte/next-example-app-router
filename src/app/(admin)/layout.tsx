import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div>AdminLayout</div>
      {children}
    </div>
  )
}

export default AdminLayout