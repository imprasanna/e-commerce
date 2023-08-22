import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/mobsearch.css";
import { setSearchOpen } from "../store/slices/MobSearchSlice";

const MobSearch = () => {
  const wrapperRef = useRef(null);

  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobSearch);

  useEffect(() => {
    const handleOutsideClick = (ev) => {
      if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
        dispatch(setSearchOpen(false));
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, dispatch]);

  const variants = {
    open: {
      y: "0%",
      transition: {
        y: { velocity: -1000, stiffness: 500 },
      },
      opacity: 1,
    },
    closed: {
      y: "-100%",
      transition: {
        y: {
          velocity: -100,
          stiffness: 100,
        },
      },
      opacity: 0,
    },
  };

  return (
    <div>
      <div>
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variants}
          className={open === true ? "mobile-search" : ""}
        >
          {open === true && (
            <div
              ref={wrapperRef}
              className="search-box-wrapper w-full mt-[6rem] flex justify-center"
            >
              <div className="search-box w-[250px] xxs:w-[300px] xs:w-[350px] sm: md1:w-[450px] md:w-[550px] md2:w-[600px] bg-white flex items-center rounded-3xl pl-2">
                <AiOutlineSearch className="text-black h-[2rem]" />
                <input
                  className="block w-[200px] xxs:w-[250px] xs:w-[300px] md1:w-[400px] md:w-[500px] md2:w-[550px] h-[40px] border-0 pl-4 text-[#959595] font-ysabeau focus:outline-0 placeholder:font-ysabeau placeholder:text-[0.9rem] placeholder:text-[#e3e3e3]"
                  placeholder="Search for products"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MobSearch;
