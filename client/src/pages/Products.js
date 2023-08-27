import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/products.css";
// #fbdce2 ffd1d9
const Products = () => {
  return (
    <div>
      <p
        className="top-banner p-4 text-lg sm:text-2xl sm:p-8"
        style={{
          backgroundImage: "linear-gradient(#ffd1d980, #ffd1d980)",
        }}
      >
        Explore a wide range of our products with exciting offers.
        <br />
        <strong className="mt-2 inline-block text-xl sm:text-3xl">
          Shop now!
        </strong>
      </p>
      <div className="mob-filter w-full border-t-[1px] border-b-[1px] border-[#e0e0e0] flex mb-4 lg:hidden">
        <div className="w-[70%]"></div>
        <div className="w-[30%] border-l-[1px] border-[#e0e0e0] p-3 flex items-center justify-center">
          <div>Filters</div>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default Products;
