import React from 'react'
import Navbar from '../components/user/Navbar'
import Home from '../components/user/Home'

const UserLayout = () => {
  return (
    <div className='h-screen'>
        <div className='flex items-center justify-center h-[15%] px-28'>
            <Navbar />
        </div>
        <div className='flex items-center justify-center h-[85%] px-28'>
            <Home />
        </div>
    </div>
  )
}

export default UserLayout