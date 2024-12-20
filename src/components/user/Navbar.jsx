import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#556B2F] text-white w-full h-14 px-5 lg:px-7 rounded-full">
      <div>
        <span>User Management</span>
      </div>

      <div className="flex">
        <div className="hidden lg:flex gap-7">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Profile
          </NavLink>
          <span>Logout</span>
        </div>

        <div className="flex pr-6 pl-7 lg:px-7">
          <span
            className="cursor-pointer flex justify-center items-center"
            title="switch theme"
          >
            {theme == "light" ? (
              <svg
                aria-hidden="true"
                focusable="false"
                height="20"
                role="presentation"
                viewBox="0 0 24 24"
                width="20"
                onClick={() => setTheme("dark")}
              >
                <path
                  d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                focusable="false"
                height="20"
                role="presentation"
                viewBox="0 0 24 24"
                width="20"
                onClick={() => setTheme("light")}
              >
                <g fill="currentColor">
                  <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path>
                  <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path>
                </g>
              </svg>
            )}
          </span>
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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "border-b-2" : "")}
                onClick={() => setToggle(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "border-b-2" : "")}
                onClick={() => setToggle(false)}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
