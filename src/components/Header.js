import React from "react";
import Logo from "./UI/Logo";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <div className="w-full flex relative justify-center items-center">
      <div className="w-32">
        <Logo />
      </div>
      <div className="absolute right-0">
        <div className="flex justify-center items-center">
          <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400 mr-3">
            John Doe
          </p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
