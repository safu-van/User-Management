import React from "react";

const SigninCard = () => {
  return (
    <div className="bg-white w-80 sm:w-[30rem] h-auto shadow-2xl rounded-sm">
      <div className="p-3">
        <div className="text-center p-2 text-2xl">Sign In</div>
        <hr className="border-gray-300 border-t-2 mb-7" />
        <div className="px-4 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm ml-1 mb-0.5">
              email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="text-sm pl-1 border-2 border-gray-500 rounded-md w-full h-9 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#556B2F]"
            />
            {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm ml-1 mb-0.5">
              password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="text-sm pl-1 border-2 border-gray-500 rounded-md w-full h-9 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#556B2F]"
            />
            {/* <span className="text-red-700 text-xs ml-1">error message</span> */}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-center mb-3">
            <button className="w-40 h-10 bg-[#556B2F] rounded-md text-[#F5F5DC] hover:border-2 hover:border-[#556B2F] hover:bg-white hover:text-[#556B2F]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninCard;
