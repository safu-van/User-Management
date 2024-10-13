import React from 'react'
import SignupCard from '../../components/auth/signup/SignupCard'

const SignupPage = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#556B2F] flex-1"></div>
      <div className="bg-[#F5F5DC] flex-1"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <SignupCard />
      </div>
    </div>
  )
}

export default SignupPage