import React from "react";
import logo from "../utils/logo.png";
import { Badge, IconButton } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  darkenOverlay,
  setMenuOpen,
  hideCrossIcon,
} from "../store/slices/NavSlice";
import "../styles/nav2.css";
// import { FiLogIn } from "react-icons/fi";
// import { BiSolidUserPlus } from "react-icons/bi";

const Nav2 = () => {
  const variants = {
    open: {
      x: "0",
      transition: {
        x: { velocity: -100, stiffness: 500 },
      },
    },
    closed: {
      x: "-100%",
      transition: {
        x: {
          velocity: -10,
          stiffness: 100,
        },
      },
    },
  };

  const dispatch = useDispatch();
  const { open, hide } = useSelector((state) => state.nav);

  const handleMenuClick = () => {
    dispatch(setMenuOpen(true));
    dispatch(darkenOverlay(true));
    dispatch(hideCrossIcon(false));
  };

  const handleCrossClick = () => {
    dispatch(setMenuOpen(false));
    dispatch(darkenOverlay(false));
    dispatch(hideCrossIcon(true));
  };

  return (
    <div className="nav2-wrapper shadow-md shadow-[#00000033] pt-2 pb-2 lg:w-[100%]">
      <motion.nav
        animate={open ? "open" : "closed"}
        variants={variants}
        className="menu h-[100vh] w-[75%] absolute z-10 top-0 bg-white xxs:w-[63%] xs:w-[55%] md:w-[31%] lg:hidden"
      >
        <p className="uppercase text-sm text-[#aba3a3]">Welcome to our shop!</p>
        <IconButton
          onClick={handleCrossClick}
          className={
            hide === false ? "unhidden-cross-icon" : "hidden-cross-icon"
          }
          // className="absolute top-[-1rem] p-3 right-[-15rem]"
        >
          <div className="cross-wrapper bg-white p-4 rounded-full">
            <RxCross2 className="text-black" />
          </div>
        </IconButton>
      </motion.nav>

      <div className="nav2 lg:w-[80%] lg:h-[80px] lg:ml-auto lg:mr-auto flex items-center justify-between">
        <IconButton>
          <HiOutlineMenu onClick={handleMenuClick} className="lg:hidden" />
        </IconButton>

        <img className="logo w-[110px] lg:w-[20%]" src={logo} alt="logo" />
        <div className="search-bar hidden lg:flex lg:items-center">
          <input
            className="search-box lg:block lg:w-[500px] lg:h-[50px] lg:border-l-2 lg:border-l-[#e0e0e0] lg:border-t-2 lg:border-t-[#e0e0e0] lg:border-b-2 lg:border-r-0 lg:pl-4 lg:text-[#959595] lg:rounded-tl-lg lg:rounded-bl-lg lg:font-ysabeau lg:focus:outline-0 lg:placeholder:font-ysabeau lg:placeholder:text-[1.2rem] lg:placeholder:text-[#e3e3e3]"
            placeholder="Search for products"
          />
          <button className="search-btn lg:h-[50px] lg:w-[100px] lg:bg-[#fdb03e] lg:rounded-tr-lg lg:rounded-br-lg lg:hover:bg-[#dc9833] lg:flex lg:justify-center lg:items-center">
            <AiOutlineSearch className="font-bold lg:text-white lg:text-3xl" />
          </button>
        </div>
        <div className="fav-and-cart pr-[0.3rem] lg:flex lg:justify-between lg:items-center lg:w-[150px]">
          <IconButton>
            <AiOutlineSearch className="text-xl text-black lg:hidden" />
          </IconButton>
          <IconButton>
            <AiFillHeart className="text-xl text-black lg:text-4xl" />
          </IconButton>
          <IconButton>
            <Badge color="secondary" badgeContent={0}>
              <MdShoppingCart className="text-xl text-black lg:text-4xl" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
