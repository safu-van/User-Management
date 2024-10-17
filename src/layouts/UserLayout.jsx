import React from 'react'
import Navbar from '../components/user/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='h-screen dark:bg-black'>
        <div className='flex items-center justify-center h-[15%] px-5 lg:px-28'>
            <Navbar />
        </div>
        <div className='flex items-center justify-center h-[85%] lg:px-28'>
            <Outlet />
        </div>
    </div>
  )
}

export default UserLayout