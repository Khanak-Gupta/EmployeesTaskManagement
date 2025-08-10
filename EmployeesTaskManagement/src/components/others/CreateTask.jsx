import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert('Please fill all fields')
      return
    }

    const { employees, admin } = getLocalStorage()

    const empIndex = employees.findIndex(
      (emp) => emp.firstname.toLowerCase() === assignTo.toLowerCase()
    )

    if (empIndex === -1) {
      alert('Employee not found!')
      return
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false
    }

    employees[empIndex].tasks.push(newTask)

    employees[empIndex].taskNumber.active += 1
    employees[empIndex].taskNumber.newTask += 1

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin)) // Keep admin data intact

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

    alert(`Task assigned to ${employees[empIndex].name} successfully!`)
  }

  return (
    <div className="bg-[#1c2733] p-6 rounded-lg shadow-lg w-full mt-10 ">
      <h2 className="text-xl font-semibold mb-4 text-white">Create Task</h2>

      <form onSubmit={submitHandler} className="grid grid-cols-5 gap-4 items-start">
        <div className="col-span-3 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-white mb-1">Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI design"
              className="w-full p-2 rounded-md bg-[#0e1621] border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Date</label>
            <input
              type="text"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              placeholder="dd/mm/yyyy"
              className="w-full p-2 rounded-md bg-[#0e1621] border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Assign To</label>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="employee firstname"
              className="w-full p-2 rounded-md bg-[#0e1621] border border-gray-600 text-white"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-white mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design, dev, etc"
              className="w-full p-2 rounded-md bg-[#0e1621] border border-gray-600 text-white"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-white mb-1">Description</label>
          <textarea
            rows="6"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Detailed description..."
            className="w-full p-2 rounded-md bg-[#0e1621] border border-gray-600 text-white"
          ></textarea>
        </div>

        <div className="col-span-5">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
