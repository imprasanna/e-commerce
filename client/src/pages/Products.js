import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/products.css";
import products from "../utils/products";
import ProductCardDetails from "../components/ProductCardDetails";
import { Grid } from "@mui/material";

const Products = () => {
  return (
    <div>
      <Nav1 />
      <Nav2 />
      <Nav3 />
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

      <p className="lg:w-[80%] ml-auto mr-auto">
        <Grid container className="lg:w-[80%] ml-auto mr-auto">
          {products.map((product) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={4}
                lg={3}
                rowSpacing={2}
                key={product.id}
              >
                <div key={product.id}>
                  <ProductCardDetails
                    id={product.id}
                    name={product.name}
                    image={product.img}
                    price={product.price}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </p>
    </div>
  );
};

export default Products;
