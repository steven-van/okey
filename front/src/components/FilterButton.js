import React from "react";

const Filter = ({ label, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      className="text-white hover:bg-red-600 font-medium text-xs p-2 rounded-full bg-red-500"
    >
      {label}
    </button>
  );
};

export default Filter;
