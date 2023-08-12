import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav3 = () => {
  return (
    <div className="nav-wrapper bg-[#292560] w-full h-[55px]">
      <div className="nav3 w-[77%] h-[52px] ml-auto mr-auto flex items-center justify-between text-white">
        <div className="categories flex items-center justify-between w-[167px] pt-[7px] pb-[7px] pl-[10px] pr-[10px] border-[#e0e0e0] border-[1px] rounded-[2px] cursor-pointer">
          <div className="categories-text text-sm">All Categories</div>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </div>

        <div className="nav-menu flex">
          <div className="uppercase text-[1.1rem] cursor-pointer select-none font-semibold hover:text-[#fdb03e]">
            Home
          </div>
          <div className="uppercase text-[1.1rem] ml-[40px] cursor-pointer select-none font-semibold hover:text-[#fdb03e]">
            New Arrivals
          </div>
          <div className="uppercase text-[1.1rem] ml-[40px] cursor-pointer select-none font-semibold hover:text-[#fdb03e]">
            About Us
          </div>
          <div className="uppercase text-[1.1rem] ml-[40px] cursor-pointer select-none font-semibold hover:text-[#fdb03e]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
