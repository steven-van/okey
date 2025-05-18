import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(true);

  const handleFormValidation = (user) => {
    if (user.email.trim() !== "" || user.pwd.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email: email, pwd: pwd };
    if (handleFormValidation(user)) {
      axios
        .post("http://localhost:8000/auth/login", user)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800">
      <form
        className="space-y-6"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="ml-auto text-sm text-red-500 hover:underline">
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered ?{" "}
          <button
            onClick={() => navigate("/signup")}
            type="submit"
            className="text-red-500 hover:underline"
          >
            Create account
          </button>
          {!isFormValid && (
            <p className="text-sm m-auto font-medium tracking-tight text-red-600 text-center animate-pulse">
              Please fill in all fields
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
