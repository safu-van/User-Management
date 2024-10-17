import React from 'react'
import Navbar from '../components/user/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='h-screen'>
        <div className='flex items-center justify-center h-[15%] px-28'>
            <Navbar />
        </div>
        <div className='flex items-center justify-center h-[85%] px-28'>
            <Outlet />
        </div>
    </div>
  )
}

export default UserLayout