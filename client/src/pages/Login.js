import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-[90%] ml-auto mr-auto">
        <div className="header-text">
          <p className="uppercase mt-8 text-lg mb-[1px] font-medium">
            Welcome back!
          </p>
          <p className="mb-6 text-sm">Please enter your details to sign in!</p>
        </div>

        <div className="uname-section mb-4">
          <p className="text-md">Username or Email*</p>
          <input
            className="rounded border-[#d8cece] border-2 px-4 py-2 w-full focus:outline-none mt-[5px] placeholder:text-sm"
            placeholder="Enter your username..."
          />
        </div>
        <div className="password-section mb-6">
          <p className="text-md">Password*</p>
          <input
            className="rounded border-[#d8cece] border-2 px-4 py-2 w-full focus:outline-none mt-[5px] placeholder:text-sm"
            placeholder="Enter your password..."
          />
        </div>

        <button className="bg-[#B650E6] text-center w-full text-white py-2 rounded">
          Submit
        </button>

        <p className="mt-4 mb-4">
          Not a user?{" "}
          <Link className="text-[#B650E6]" to="/register">
            Register!
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
