import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import UserTable from "../../components/admin/UserTable";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-[15%] px-5 lg:px-28">
        <AdminNavbar />
      </div>
      <div className="h-[85%] px-5 lg:px-36">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
