import React from "react";
import { IconButton } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  darkenOverlay,
  setMenuOpen,
  hideCrossIcon,
} from "../store/slices/NavSlice";
import "../styles/ham.css";

const HamMenu = () => {
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

  const handleCrossClick = () => {
    dispatch(setMenuOpen(false));
    dispatch(darkenOverlay(false));
    dispatch(hideCrossIcon(true));
  };

  return (
    <div>
      <motion.nav
        animate={open ? "open" : "closed"}
        variants={variants}
        className="menu h-[100vh] w-[75%] fixed z-10 top-0 bg-white xxs:w-[63%] xs:w-[55%] md1:w-[43%] md:w-[31%] md2:w-[29%] md3:w-[26%] lg:hidden"
      >
        <p className="uppercase text-sm text-[#aba3a3]">Welcome to our shop!</p>
        <IconButton
          onClick={handleCrossClick}
          className={
            hide === false ? "unhidden-cross-icon" : "hidden-cross-icon"
          }
          // className="absolute top-[-1rem] p-3 right-[-15rem]"
        >
          <div className="cross-wrapper bg-white p-4 rounded-full lg:hidden">
            <RxCross2 className="text-black" />
          </div>
        </IconButton>
      </motion.nav>
    </div>
  );
};

export default HamMenu;
