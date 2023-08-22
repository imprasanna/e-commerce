import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/mobsearch.css";

const MobSearch = () => {
  const { open } = useSelector((state) => state.mobSearch);

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
      <div className="w-full h-full">
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variants}
          className="mobile-search bg-[#000000b3] fixed top-0 bottom-0 right-0 left-0 z-50 text-white"
        >
          <div className="search-box-wrapper w-full mt-[6rem] flex justify-center">
            <div className="search-box w-[250px] xxs:w-[300px] xs:w-[350px] sm: md1:w-[450px] md:w-[550px] md2:w-[600px] bg-white flex items-center rounded-3xl pl-2">
              <AiOutlineSearch className="text-black h-[2rem]" />
              <input
                className="block w-[200px] xxs:w-[250px] xs:w-[300px] md1:w-[400px] md:w-[500px] md2:w-[550px] h-[40px] border-0 pl-4 text-[#959595] font-ysabeau focus:outline-0 placeholder:font-ysabeau placeholder:text-[0.9rem] placeholder:text-[#e3e3e3]"
                placeholder="Search for products"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobSearch;
