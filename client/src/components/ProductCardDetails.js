import { Paper } from "@mui/material";
import React, { useState } from "react";

const ProductCardDetails = (props) => {
  const [hoverItemId, setHoveredItemId] = useState(null);

  const elevateBox = (productId) => {
    setHoveredItemId(productId);
  };

  const lowerBox = () => {
    setHoveredItemId(null);
  };

  return (
    <div className="w-full">
      <Paper
        elevation={hoverItemId === props.id ? 6 : 0}
        onMouseEnter={() => elevateBox(props.id)}
        onMouseLeave={lowerBox}
        className="flex items-center justify-between flex-col mt-4 lg:mb-12 border-[#e0e0e0] border-[1px] rounded p-2 w-[95%] xs:w-[90%] lg:w-[80%] ml-auto mr-auto h-[340px] md1:h-[400px]"
      >
        <img src={props.image} alt="" className="mb-[1.5rem] w-full" />
        <div
          className="text-[#108ee9] mb-[1rem] cursor-pointer w-full text-[1rem] lg:text-lg flex-wrap sm:text-[1.1rem]"
          style={{ textAlign: "left" }}
        >
          {props.name}
        </div>
        <div
          className="text-[#f57224] text-xl"
          style={{
            alignSelf: "flex-start",
          }}
        >
          Rs. {props.price}
        </div>
      </Paper>
    </div>
  );
};

export default ProductCardDetails;
