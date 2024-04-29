import React from "react";
import { FiLogIn } from "react-icons/fi";
import { BiSolidUserPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <div className="nav1-wrapper lg:border-b-[1px] lg:border-[#e3e3e3] hidden lg:block">
      <div className="nav1 lg:w-[80%] lg:h-[37px] lg:flex lg:justify-between lg:items-center lg:ml-auto lg:mr-auto">
        <p className="nav1-text uppercase lg:text-sm lg:text-[#aba3a3]">
          Welcome to our shop!
        </p>
        <div className="auth lg:flex lg:w-[196px] lg:items-center lg:justify-between">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="login lg:text-white lg:flex lg:items-center lg:justify-center lg:bg-[#fdb03e] lg:rounded lg:h-[25px] lg:w-[90px] lg:cursor-pointer lg:select-none lg:hover:outline lg:hover:outline-1 lg:hover:outline-[#fdb03e] lg:hover:text-[#fdb03e] lg:hover:bg-white">
              <FiLogIn />
              <div className="lg:ml-[0.5rem]">Login</div>
            </div>
          </Link>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <div className="register lg:text-white lg:flex lg:items-center lg:justify-center lg:bg-[#fdb03e] lg:rounded lg:h-[25px] lg:w-[90px] lg:cursor-pointer lg:select-none lg:hover:outline lg:hover:outline-1 lg:hover:outline-[#fdb03e] lg:hover:text-[#fdb03e] hover:bg-white">
              <BiSolidUserPlus className="lg:w-4 h-4" />
              <div className="lg:ml-[0.5rem]">Register</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
