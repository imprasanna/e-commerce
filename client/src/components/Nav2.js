import React from "react";
import logo from "../utils/logo.png";
import { Badge, IconButton } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";

const Nav2 = () => {
  return (
    // <Wrapper>
    <div className="nav2-wrapper w-[100%]">
      <div className="nav2 w-[80%] h-[80px] ml-auto mr-auto flex items-center justify-between">
        <img className="logo h-[50%]" src={logo} alt="logo" />
        <div className="search-bar flex items-center">
          <input
            className="search-box w-[500px] h-[50px] border-l-2 border-l-[#e0e0e0] border-t-2 border-t-[#e0e0e0] border-b-2 border-r-0 pl-4 text-[#959595] rounded-tl-md rounded-bl-md font-ysabeau focus:outline-0 placeholder:font-ysabeau placeholder:text-[1.2rem] placeholder:text-[#e3e3e3]"
            placeholder="Search for products"
          />
          <button className="search-btn h-[50px] w-[100px] bg-[#fdb03e] rounded-tr-md rounded-br-md hover:bg-[#dc9833] flex justify-center items-center">
            <AiOutlineSearch className="text-white text-3xl" />
          </button>
        </div>
        <div className="fav-and-cart flex justify-between items-center w-[150px]">
          <IconButton>
            <AiFillHeart className="text-black text-4xl" />
          </IconButton>
          <IconButton>
            <Badge color="secondary" badgeContent={0}>
              <MdShoppingCart className="text-black text-4xl" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Nav2;
