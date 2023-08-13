import React from "react";
import logo from "../utils/logo.png";
import { Badge, IconButton } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";

const Nav2 = () => {
  return (
    // <Wrapper>
    <div className="nav2-wrapper lg:w-[100%] hidden lg:block">
      <div className="nav2 lg:w-[80%] lg:h-[80px] lg:ml-auto lg:mr-auto lg:flex lg:items-center lg:justify-between">
        <img className="logo lg:h-[50%]" src={logo} alt="logo" />
        <div className="search-bar lg:flex lg:items-center">
          <input
            className="search-box lg:w-[500px] lg:h-[50px] lg:border-l-2 lg:border-l-[#e0e0e0] lg:border-t-2 lg:border-t-[#e0e0e0] lg:border-b-2 lg:border-r-0 lg:pl-4 lg:text-[#959595] lg:rounded-tl-lg lg:rounded-bl-lg lg:font-ysabeau lg:focus:outline-0 lg:placeholder:font-ysabeau lg:placeholder:text-[1.2rem] lg:placeholder:text-[#e3e3e3]"
            placeholder="Search for products"
          />
          <button className="search-btn lg:h-[50px] lg:w-[100px] lg:bg-[#fdb03e] lg:rounded-tr-lg lg:rounded-br-lg lg:hover:bg-[#dc9833] lg:flex lg:justify-center lg:items-center">
            <AiOutlineSearch className="lg:text-white lg:text-3xl" />
          </button>
        </div>
        <div className="fav-and-cart lg:flex lg:justify-between lg:items-center lg:w-[150px]">
          <IconButton>
            <AiFillHeart className="lg:text-black lg:text-4xl" />
          </IconButton>
          <IconButton>
            <Badge color="secondary" badgeContent={0}>
              <MdShoppingCart className="lg:text-black lg:text-4xl" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Nav2;
