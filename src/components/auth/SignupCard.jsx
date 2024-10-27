import React from "react";
import { Link } from "react-router-dom";

const SignupCard = () => {
  return (
    <div className="bg-white w-[22rem] sm:w-[30rem] shadow-2xl rounded-sm">
      <div className="p-3">
        <div className="text-center p-2 text-2xl font-bold">Sign up</div>
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
              Sign up
            </button>
          </div>
          <div className="flex justify-center h-6">
            Already have an account?&nbsp;
            <Link
              to="/signin"
              className="text-[#556B2F] hover:border-b-2 hover:border-[#556B2F]"
            >
              Sign in
            </Link>
          </div>
          <div className="mb-5 mt-1 text-center border-b">
            <div className="inline-block px-3 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
              Or
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button className="flex items-center justify-center w-full max-w-56 py-2 text-black rounded-md focus:outline-none border-2 hover:bg-gray-100">
              <div className="p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
