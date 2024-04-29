import { Paper } from "@mui/material";
import React, { useState } from "react";
import products from "../utils/products";
import { useDispatch } from "react-redux";
import { showProductDetails } from "../store/slices/ProductSlice";
import { Link } from "react-router-dom";

const ProductCardDetails = (props) => {
  const [hoverItemId, setHoveredItemId] = useState(null);
  const dispatch = useDispatch();

  const elevateBox = (productId) => {
    setHoveredItemId(productId);
  };

  const lowerBox = () => {
    setHoveredItemId(null);
  };

  const handleProductOpen = (id) => {
    // console.log("ID", id);
    // console.log("PRODUCTS", products);
    const foundProduct = products.find((product) => product.id === id);
    // console.log("FOUND PRODUCT", foundProduct);
    dispatch(showProductDetails(foundProduct));
  };

  return (
    <>
      <Link to={`/products/${props.id}`}>
        <div className="w-full">
          <Paper
            onClick={handleProductOpen(props.id)}
            elevation={hoverItemId === props.id ? 6 : 0}
            onMouseEnter={() => elevateBox(props.id)}
            onMouseLeave={lowerBox}
            className="flex items-center justify-between flex-col mt-4 lg:mb-12 border-[#e0e0e0] border-[1px] rounded p-2 w-[95%] xs:w-[90%] lg:w-[90%] ml-auto mr-auto h-[340px] md1:h-[450px]"
          >
            <img
              src={props.image}
              alt={props.image}
              className="mb-[1.5rem] w-[250px]"
            />
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
      </Link>
    </>
  );
};

export default ProductCardDetails;
