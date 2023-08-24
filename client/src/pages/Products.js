import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Products = () => {
  return (
    <div>
      <p>
        Explore a wide range of our products with exciting offers.
        <br />
        <strong>Shop now!</strong>
      </p>
      <div className="w-full border-t-[1px] border-b-[1px] border-[#e0e0e0] flex mb-4 lg:hidden">
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
