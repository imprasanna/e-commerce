import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
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
          <div className="w-full mt-[6rem]">Search</div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobSearch;
