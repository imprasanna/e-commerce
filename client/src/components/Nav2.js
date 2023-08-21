import React from "react";
import logo from "../utils/logo.png";
import { Badge, IconButton } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setHomeActive,
  setSearchActive,
  setCartActive,
  setAccountActive,
} from "../store/slices/MobNavSlice";

const Nav2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    dispatch(setHomeActive(true));
    dispatch(setSearchActive(false));
    dispatch(setCartActive(false));
    dispatch(setAccountActive(false));
    navigate("/");
  };

  return (
    <div className="nav2-wrapper hidden lg:block lg:w-[100%] z-10">
      <div className="lg:w-[80%] lg:flex lg:justify-between lg:items-center lg:ml-auto lg:mr-auto lg:pt-2 lg:pb-2 xl:pb-3 xl:pt-3">
        <img
          onClick={handleLogoClick}
          className="logo lg:w-[20%] 2xl:w-[15%]"
          src={logo}
          alt="logo"
        />
        <div className="search-bar hidden lg:flex lg:items-center">
          <input
            className="search-box lg:block lg:w-[400px] lg:h-[40px] xl:w-[500px] xl:h-[50px] lg:border-l-2 lg:border-l-[#e0e0e0] lg:border-t-2 lg:border-t-[#e0e0e0] lg:border-b-2 lg:border-r-0 lg:pl-4 lg:text-[#959595] lg:rounded-tl-lg lg:rounded-bl-lg lg:font-ysabeau lg:focus:outline-0 lg:placeholder:font-ysabeau lg:placeholder:text-[0.9rem] xl:placeholder:text-[1rem] lg:placeholder:text-[#e3e3e3]"
            placeholder="Search for products"
          />
          <button className="search-btn lg:h-[40px] lg:w-[80px] xl:h-[50px] xl:w-[100px] lg:bg-[#fdb03e] lg:rounded-tr-lg lg:rounded-br-lg lg:hover:bg-[#dc9833] lg:flex lg:justify-center lg:items-center">
            <AiOutlineSearch className="font-bold lg:text-white lg:text-2xl xl:text-3xl" />
          </button>
        </div>
        <div className="fav-and-cart pr-[0.3rem] lg:flex lg:justify-between lg:items-center lg:w-[120px] xl:w-[150px]">
          <IconButton>
            <AiFillHeart className="hidden lg:block lg:text-black lg:text-3xl" />
          </IconButton>
          <IconButton>
            <Badge color="secondary" badgeContent={0}>
              <MdShoppingCart className="hidden lg:block lg:text-black lg:text-3xl" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
