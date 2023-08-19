import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import "../styles/mobilenav.css";

const MobileNav = () => {
  const { dark } = useSelector((state) => state.nav);

  return (
    <>
      <div
        className={
          dark === true ? "mobile-nav-wrapper-dark" : "mobile-nav-wrapper"
        }
      >
        <div className="w-[25%] p-2 flex flex-col justify-center items-center">
          <AiFillHome className="text-2xl text-black" />
          <div className="text-lg">Home</div>
        </div>

        <div className="w-[25%] p-2 flex flex-col justify-center items-center">
          <RiSearchLine className="text-2xl text-black" />
          <div className="text-lg">Search</div>
        </div>

        <div className="w-[25%] p-2 flex flex-col justify-center items-center">
          <Badge badgeContent={0}>
            <MdShoppingCart className="text-2xl text-black" />
          </Badge>
          <div className="text-lg">Cart</div>
        </div>

        <div className="w-[25%] p-2 flex flex-col flex-wrap justify-center items-center">
          <BiSolidUser className="text-2xl text-black" />
          <div className="text-lg mt-1 text-center leading-3 md:mt-2">
            My account
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
