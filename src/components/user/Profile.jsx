import React, { useState } from "react";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="border-2 border-[#556B2F] rounded-sm w-[70%] md:w-[30%] flex flex-col items-center py-5 px-5 lg:px-8">
      <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden">
        <img
          src="profile-placeholder.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        {edit && (
          <label className="cursor-pointer">
            <input
              name="image"
              accept="image/*"
              type="file"
              className="absolute inset-0 opacity-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center lg:bg-opacity-0 lg:hover:bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="text-white lg:text-opacity-0 lg:hover:text-opacity-100 lg:w-full lg:h-full lg:px-[4.7rem]"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </label>
        )}
      </div>

      <div className="w-full">
        <div className="relative mt-7 w-full">
          <input
            type="text"
            id="name"
            value="Safuvan"
            className={`block pl-2 w-full h-10 text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 rounded-md border-2 focus:outline-none ${
              edit ? "border-[#556B2F]" : "border-gray-300 dark:border-gray-600"
            } peer`}
            readOnly={!edit}
          />
          <label
            htmlFor="name"
            className="absolute rounded-full text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 left-2"
          >
            Name
          </label>
          {/* <span className="text-xs text-red-500 pl-3">alert</span> */}
        </div>
        <div className="relative mt-4 w-full">
          <input
            type="text"
            id="email"
            value="contactmesafwan@gmail.com"
            className={`block pl-2 w-full h-10 text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 rounded-md border-2 focus:outline-none ${
              edit ? "border-[#556B2F]" : "border-gray-300 dark:border-gray-600"
            } peer`}
            readOnly={!edit}
          />
          <label
            htmlFor="email"
            className="absolute rounded-full text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 left-2"
          >
            Email
          </label>
          {/* <span className="text-xs text-red-500 pl-3">alert</span> */}
        </div>
        <div className="relative mt-4 w-full">
          <input
            type="text"
            id="floating_input"
            value="9188552541"
            className={`block pl-2 w-full h-10 text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 rounded-md border-2 focus:outline-none ${
              edit ? "border-[#556B2F]" : "border-gray-300 dark:border-gray-600"
            } peer`}
            readOnly={!edit}
          />
          <label
            htmlFor="floating_input"
            className="absolute rounded-full text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 left-2"
          >
            Phone Number
          </label>
          {/* <span className="text-xs text-red-500 pl-3">alert</span> */}
        </div>
        <div className="relative mt-4 w-full">
          <textarea
            id="bio"
            className={`block p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 rounded-md border-2 focus:outline-none ${
              edit ? "border-[#556B2F]" : "border-gray-300 dark:border-gray-600"
            } peer`}
            rows="4"
            readOnly={!edit}
          ></textarea>
          <label
            htmlFor="bio"
            className="absolute rounded-full text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 left-2"
          >
            Bio
          </label>
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        {edit ? (
          <>
            <button
              onClick={() => setEdit(false)}  
              className="w-20 h-8 bg-gray-100 text-[#556B2F] border-2 border-[#556B2F] rounded-md 
             lg:hover:bg-[#6a853a] lg:hover:text-white 
             dark:bg-gray-800 dark:text-white dark:border-[#556B2F] 
             dark:lg:hover:bg-[#6a853a] dark:lg:hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => setEdit(true)}
              className="w-24 h-8 bg-[#556B2F] rounded-md text-white border-2 border-[#556B2F] lg:hover:border-[#556B2F] lg:hover:text-[#556B2F] lg:hover:bg-white dark:bg-[#556B2F] dark:hover:text-white dark:lg:hover:bg-[#6a853a]"
            >
              Update
            </button>
          </>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="w-36 h-8 bg-white rounded-md text-[#556B2F] border-2 border-[#556B2F] lg:hover:bg-[#556B2F] lg:hover:text-white dark:bg-[#556B2F] dark:text-white dark:lg:hover:bg-[#6a853a]"
          >
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
