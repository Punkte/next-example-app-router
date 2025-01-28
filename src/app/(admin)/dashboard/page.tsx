import ClientComponent from "@/components/ClientComponent"
import ServerComponent from "@/components/ServerComponent"

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  )
}

export default Dashboard