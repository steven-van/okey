import React from "react";
import LoginModal from "../components/LoginModal";
import Logo from "../components/UI/Logo";

const Login = () => {
  return (
    <div className="flex justify-center items-center space-y-4 h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-64">
        <Logo />
      </div>
      <LoginModal />
    </div>
  );
};

export default Login;
