import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/mobilebottomnav.css";
import {
  setAccountActive,
  setCartActive,
  setHomeActive,
  setSearchActive,
} from "../store/slices/MobNavSlice";
import { setSearchOpen } from "../store/slices/MobSearchSlice";
import MobSearch from "./MobSearch";

const MobileNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dark } = useSelector((state) => state.nav);
  const { home, search, cart, account } = useSelector((state) => state.mobNav);

  const handleHomeClick = () => {
    dispatch(setHomeActive(true));
    dispatch(setSearchActive(false));
    dispatch(setCartActive(false));
    dispatch(setAccountActive(false));
    navigate("/");
  };

  const handleSearchClick = () => {
    dispatch(setHomeActive(false));
    dispatch(setSearchActive(true));
    dispatch(setCartActive(false));
    dispatch(setAccountActive(false));
    dispatch(setSearchOpen(true));
  };

  const handleCartClick = () => {
    dispatch(setHomeActive(false));
    dispatch(setSearchActive(false));
    dispatch(setCartActive(true));
    dispatch(setAccountActive(false));
    navigate("/carts");
  };

  const handleAccountClick = () => {
    dispatch(setHomeActive(false));
    dispatch(setSearchActive(false));
    dispatch(setCartActive(false));
    dispatch(setAccountActive(true));
    navigate("/profile");
  };

  return (
    <>
      <div
        className={
          dark === true ? "mobile-nav-wrapper-dark" : "mobile-nav-wrapper"
        }
      >
        <MobSearch />
        <div
          onClick={handleHomeClick}
          className={
            home === true ? "active-nav-element" : "inactive-nav-element"
          }
        >
          <AiFillHome className="text-2xl" />
          <div className="text-lg">Home</div>
        </div>

        <div
          onClick={handleSearchClick}
          className={
            search === true ? "active-nav-element" : "inactive-nav-element"
          }
        >
          <RiSearchLine className="text-2xl" />
          <div className="text-lg">Search</div>
        </div>

        <div
          onClick={handleCartClick}
          className={
            cart === true ? "active-nav-element" : "inactive-nav-element"
          }
        >
          <Badge badgeContent={0}>
            <MdShoppingCart className="text-2xl" />
          </Badge>
          <div className="text-lg">Cart</div>
        </div>

        <div
          onClick={handleAccountClick}
          className={`account ${
            account === true ? "active-nav-element" : "inactive-nav-element"
          }`}
        >
          <BiSolidUser className="text-2xl" />
          <div className="text-lg mt-1 text-center leading-3 md:mt-2">
            My account
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
