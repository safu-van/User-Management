import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-4xl sm:text-5xl text-[#556B2F]">
        Welcome, <strong>Safuvan</strong>
      </span>
      <Link
        to="/profile"
        className="w-40 h-10 bg-white rounded-md text-[#556B2F] border-2 border-[#556B2F] lg:hover:bg-[#556B2F] lg:hover:text-white dark:bg-[#556B2F] dark:text-white dark:lg:hover:bg-[#6a853a] flex items-center justify-center"
      >
        View Profile
      </Link>
    </div>
  );
};

export default Home;
