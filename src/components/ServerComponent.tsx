import AnotherClientComponent from "./AnotherClientComponent"

const ServerComponent = () => {
  return (
    <div className='bg-gray-400 p-8 inline-block'>
      <p>ServerComponent</p>
      <AnotherClientComponent />
    </div>
  )
}

export default ServerComponent