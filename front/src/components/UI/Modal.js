import React from "react";
import ReactDOM from "react-dom";
import XIcon from "./XIcon";

const Modal = ({ setShown, children }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center z-50">
        <div
          className="absolute left-0 top-0 w-full h-full z-10 cursor-pointer bg-black bg-opacity-40"
          onClick={() => setShown(false)}
        ></div>
        <div
          className={`relative bg-white dark:bg-gray-800
          bg-opacity-95 flex justify-center items-center rounded-3xl p-8 shadow-lg z-20 mx-4`}
        >
          <div className="absolute -top-4 -right-4">
            <XIcon handleClick={() => setShown(false)} />
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
