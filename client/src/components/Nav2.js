import React from "react";
import logo from "../utils/logo.png";
import { Badge, IconButton } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  darkenOverlay,
  setMenuOpen,
  hideCrossIcon,
} from "../store/slices/NavSlice";
import HamMenu from "./HamMenu";
import "../styles/nav2.css";

const Nav2 = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.nav);

  const handleMenuClick = () => {
    dispatch(setMenuOpen(true));
    dispatch(darkenOverlay(true));
    dispatch(hideCrossIcon(false));
  };

  return (
    <Wrapper>
      <div className="nav2-wrapper shadow-md shadow-[#0000004d] lg:ml-auto lg:mr-auto lg:w-[100%] z-10">
        <HamMenu />

        <div
          className={
            dark === true
              ? "nav2-unclickable"
              : dark === false
              ? "nav2-clickable"
              : "nav2"
          }
        >
          <HiOutlineMenu
            onClick={handleMenuClick}
            className="lg:hidden ml-2 text-2xl text-black"
          />

          <img
            className="logo w-[35%] md:w-[19%] lg:w-[20%] 2xl:w-[15%]"
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;

export default Nav2;
