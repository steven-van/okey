import React from "react";
import SignupModal from "../Components/SignupModal";
import Logo from "../Components/UI/Logo";

const Signup = () => {
  return (
    <div className="g-container flex flex-col md:flex-row justify-center items-center space-y-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-32 md:w-64">
        <Logo />
      </div>
      <SignupModal />
    </div>
  );
};

export default Signup;
