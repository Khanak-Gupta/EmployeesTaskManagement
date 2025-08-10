import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllEmp from '../others/AllEmp'

const AdminDashboard = ({data}) => {
  return (
    <div className="min-h-screen h-screen w-full p-10 bg-gray-900 text-white flex flex-col">
      <Header data={data} />
      <CreateTask />
      <AllEmp data={data}/>
    </div>
  )
}

export default AdminDashboard
