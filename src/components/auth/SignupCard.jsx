import React from "react";
import { Link } from "react-router-dom";

const SignupCard = () => {
  return (
    <div className="bg-white w-80 sm:w-[30rem] h-auto shadow-2xl rounded-sm">
      <div className="p-3">
        <div className="text-center p-2 text-2xl">Sign Up</div>
        <hr className="border-gray-300 border-t-2 mb-7" />
        <div className="px-4 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-0.5 ml-1">
              name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              className="text-sm pl-2 border-2 border-gray-300 rounded-md w-full h-10 bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-[#556B2F]"
            />
            {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-0.5 ml-1">
              email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="text-sm pl-2 border-2 border-gray-300 rounded-md w-full h-10 bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-[#556B2F]"
            />
            {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
          </div>
          <div>
            <label htmlFor="number" className="block text-sm mb-0.5 ml-1">
              phone number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              id="number"
              className="text-sm pl-2 border-2 border-gray-300 rounded-md w-full h-10 bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-[#556B2F]"
            />
            {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
          </div>
          <div className="flex">
            <div className="flex-1 mr-1">
              <label htmlFor="password" className="block text-sm mb-0.5 ml-1">
                password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                id="password"
                className="flex-1 text-sm pl-2 border-2 border-gray-300 rounded-md w-full h-10 bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-[#556B2F]"
              />
              {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
            </div>
            <div className="flex-1 ml-1">
              <label htmlFor="c-password" className="block text-sm mb-0.5 ml-1">
                confirm password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                id="c-password"
                className="text-sm pl-1 border-2 border-gray-300 rounded-md w-full h-10 bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-[#556B2F]"
              />
              {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
            </div>
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-center mb-3">
            <button className="w-40 h-10 bg-[#556B2F] rounded-md text-[#F5F5DC] hover:border-2 hover:border-[#556B2F] hover:bg-white hover:text-[#556B2F]">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center mb-3 h-6">
            Already have an account?&nbsp;{" "}
            <Link
              to="/signin"
              className="text-[#556B2F] hover:border-b-2 hover:border-[#556B2F]"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
