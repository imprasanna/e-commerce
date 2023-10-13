import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-center pt-4">
          <span className="text-xl font-semibold border-b-[3px] border-black pb-1">
            My Account
          </span>
        </p>

        <div className="w-[90%] ml-auto mr-auto">
          <div className="header-text">
            <p className="uppercase mt-8 text-lg mb-[1px] font-medium">
              Register here!
            </p>
            <p className="mb-6 text-sm">
              New User? Please fill the details to register!
            </p>
          </div>

          <div className="uname-section mb-4">
            <p className="text-md">Username or Email*</p>
            <input
              className="rounded border-[#d8cece] border-2 px-4 py-2 w-full focus:outline-none mt-[5px] placeholder:text-sm"
              placeholder="Enter your username..."
            />
          </div>
          <div className="password-section mb-4">
            <p className="text-md">Password*</p>
            <input
              className="rounded border-[#d8cece] border-2 px-4 py-2 w-full focus:outline-none mt-[5px] placeholder:text-sm"
              placeholder="Enter your password..."
            />
          </div>

          <div className="confirmPassword-section mb-6">
            <p className="text-md">Confirm Password*</p>
            <input
              className="rounded border-[#d8cece] border-2 px-4 py-2 w-full focus:outline-none mt-[5px] placeholder:text-sm"
              placeholder="Enter your password..."
            />
          </div>

          <button className="bg-[#B650E6] text-center w-full text-white py-2 rounded">
            Submit
          </button>

          <p className="mt-4 mb-20">
            Already a user?{" "}
            <Link className="text-[#B650E6]" to="/profile">
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
