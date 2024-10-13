import React from "react";
import SigninCard from "../../components/auth/signin/SigninCard";

const SigninPage = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#F5F5DC] flex-1"></div>
      <div className="bg-[#556B2F] flex-1"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <SigninCard />
      </div>
    </div>
  );
};

export default SigninPage;
