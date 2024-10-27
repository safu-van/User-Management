import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import UserLayout from "./layouts/UserLayout";
import Home from "./components/user/Home";
import Profile from "./components/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import OtpVerifyPage from "./pages/auth/OtpVerifyPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Dashboard />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/verify",
      element: <OtpVerifyPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
