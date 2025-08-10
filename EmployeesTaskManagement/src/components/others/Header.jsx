import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {


  const logOutUser= ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>Arjun 😊👋</span> </h1>
      <button onClick={logOutUser}
        className='bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-small cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
