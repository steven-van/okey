import React from "react";
import LoginModal from "../Components/LoginModal";

const Login = () => {
  return (
    <div className="g-container flex flex-col md:flex-row justify-center items-center space-y-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-32 md:w-64">
        <Logo />
      </div>
      <LoginModal />
    </div>
  );
};

export default Login;
