'use client'

const ClientComponent = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="p-8 bg-teal-500 inline-block">
        <p>ClientComponent</p>
        {children}
      </div>
    </>
  )
}

export default ClientComponent