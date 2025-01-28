const AnotherServerComponent = ({count}: {count: number}) => {
  return (
    <div>AnotherServerComponent with a prop from a client component {count}</div>
  )
}

export default AnotherServerComponent