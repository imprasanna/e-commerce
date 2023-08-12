import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { FiLogIn } from "react-icons/fi";
import { BiSolidUserPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <div className="nav1-wrapper border-b-[1px] border-[#e3e3e3]">
      <div className="nav1 w-[80%] h-[37px] flex justify-between items-center ml-auto mr-auto">
        <p className="nav1-text text-sm text-[#aba3a3] uppercase">
          Welcome to our shop!
        </p>
        <div className="auth flex w-[196px] items-center justify-between">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="login text-white flex items-center justify-center bg-[#fdb03e] rounded h-[25px] w-[90px] cursor-pointer select-none hover:outline hover:outline-1 hover:outline-[#fdb03e] hover:text-[#fdb03e] hover:bg-white">
              <FiLogIn />
              <div className="ml-[0.5rem]">Login</div>
            </div>
          </Link>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <div className="register text-white flex items-center justify-center bg-[#fdb03e] rounded h-[25px] w-[90px] cursor-pointer select-none hover:outline hover:outline-1 hover:outline-[#fdb03e] hover:text-[#fdb03e] hover:bg-white">
              <BiSolidUserPlus className="w-4 h-4" />
              <div className="ml-[0.5rem]">Register</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
