import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav3 = () => {
  return (
    <div className="nav-wrapper lg:bg-[#292560] lg:w-full lg:h-[50px] hidden lg:block">
      <div className="nav3 lg:w-[77%] lg:h-[52px] lg:ml-auto lg:mr-auto lg:flex lg:items-center lg:justify-between lg:text-white">
        <div className="categories lg:flex lg:items-center lg:justify-between lg:w-[150px] lg:pt-[5px] lg:pb-[5px] lg:pl-[10px] lg:pr-[10px] lg:border-[#e0e0e0] lg:border-[1px] lg:rounded-[2px] lg:cursor-pointer">
          <div className="categories-text lg:text-sm">All Categories</div>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </div>

        <div className="nav-menu flex">
          <div className="lg:uppercase lg:text-[1rem] lg:cursor-pointer lg:select-none lg:font-semibold lg:hover:text-[#fdb03e]">
            Home
          </div>
          <div className="lg:uppercase lg:text-[1rem] lg:ml-[40px] lg:cursor-pointer lg:select-none lg:font-semibold lg:hover:text-[#fdb03e]">
            New Arrivals
          </div>
          <div className="lg:uppercase lg:text-[1rem] lg:ml-[40px] lg:cursor-pointer lg:select-none lg:font-semibold lg:hover:text-[#fdb03e]">
            About Us
          </div>
          <div className="lg:uppercase lg:text-[1rem] lg:ml-[40px] lg:cursor-pointer lg:select-none lg:font-semibold lg:hover:text-[#fdb03e]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
