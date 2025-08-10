import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllEmp = () => {

    const authData=useContext(AuthContext)

  return (
    <div id='tasklist' className='bg-[#1c2733] mt-5 rounded p-5 h-55  '>
        <div className='bg-red-400 mt-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>Name</h2>
            <h3 className='w-1/5 '>Position</h3>
            <h5 className='w-1/5  '>Active Task</h5>
            <h5 className='w-1/5 '>New Task</h5>
            <h5 className='w-1/5  '>Failed Task</h5>
            <h5 className='w-1/5  '>Completed Task</h5>
            <h5 className='w-1/5 '>Status</h5>
        </div>

        <div class=' h-[70%] overflow-auto'>
            {authData.employees.map(function(elem,idx){
            return <div key={idx} className='bg-emerald-600 mt-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>{elem.firstname}</h2>
            <h3 className='w-1/5 bg-white-600'>{elem.position}</h3>
            <h5 className='w-1/5 text-blue-600 '>{elem.taskNumber.active}</h5>
            <h5 className='w-1/5 text-yellow-400 '>{elem.taskNumber.newTask}</h5>
            <h5 className='w-1/5 text-red-600 '>{elem.taskNumber.failed}</h5>
            <h5 className='w-1/5 text-green-600 '>{elem.taskNumber.completed}</h5>
            <h5 className='w-1/5  '>Click to see Status</h5>
        </div>
          })}
        </div>

      
        
    </div>
  )
}

export default AllEmp
