import React from "react";
import { motion } from "framer-motion";

const Search = () => {
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
  return <div>Search</div>;
};

export default Search;
