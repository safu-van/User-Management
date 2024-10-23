import React, { useEffect, useState } from "react";

const AdminNavbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = "User Management | Admin";
  }, []);

  return (
    <div className="flex items-center justify-between bg-[#556B2F] text-white w-full h-14 px-5 lg:px-7 rounded-full">
      <div>
        <span>User Management | Admin</span>
      </div>

      <div className="flex">
        <div className="hidden lg:flex gap-7">
          <span>Logout</span>
        </div>

        {/* Hamburger Button for mobile/tablet screens */}
        <div className="flex lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              // Cross Icon (to close the menu)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon (to open the menu)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            toggle ? "translate-x-0" : "-translate-x-full"
          } lg:hidden transform top-[13%] left-0 right-0 z-10 absolute bg-gray-800 text-white p-6 transition-transform duration-300 ease-in-out`}
        >
          <ul className="space-y-6 text-lg pl-3">
            <li>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
