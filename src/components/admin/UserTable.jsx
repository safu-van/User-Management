import React from "react";

const UserTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-10 rounded-sm shadow-lg">
        <thead>
          <tr>
            <th className="w-20 px-4 py-2 border">S No.</th>
            <th className="px-4 py-2 border w-28">Profile</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone No.</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center border">2</td>
            <td className="px-4 py-2 border">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                className="rounded-full w-[50px] object-cover h-[50px] m-auto"
                alt="profile"
              />
            </td>
            <td className="px-4 py-2 border">fsdfdsffa</td>
            <td className="px-4 py-2 border">contactmesafuvan@gmail.com</td>
            <td className="px-4 py-2 border">1234567890</td>
            <td className="px-4 py-2 text-center border">
              <button className="w-20 h-8 text-white bg-red-700 rounded-md hover:bg-white hover:text-red-700 border-2 hover:border-red-700">
                Block
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center border">2</td>
            <td className="px-4 py-2 border">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                className="rounded-full w-[50px] object-cover h-[50px] m-auto"
                alt="profile"
              />
            </td>
            <td className="px-4 py-2 border">fsdfdsdsafdfdsf dfsdfffa</td>
            <td className="px-4 py-2 border">contactmesafuvan@gmail.com</td>
            <td className="px-4 py-2 border">1234567890</td>
            <td className="px-4 py-2 border text-center">
              <button className="w-20 h-8 text-white bg-green-700 rounded-md hover:bg-white hover:text-green-700 border-2 hover:border-green-700">
                Unblock
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
