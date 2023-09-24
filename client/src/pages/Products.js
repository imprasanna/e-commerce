import React, { useState } from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/products.css";
import products from "../utils/products";
import ProductCardDetails from "../components/ProductCardDetails";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, ITEMS_PER_PAGE)
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      // Increment the current page
      setCurrentPage(currentPage + 1);

      // Calculate the start and end index for the next page
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;

      // Slice the product array to get the items for the next page
      const nextItems = products.slice(startIndex, endIndex);

      // Append the next items to the displayedProducts array
      setDisplayedProducts([...displayedProducts, ...nextItems]);
    }, 2000);
  };
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
        <InfiniteScroll
          dataLength={displayedProducts.length}
          next={fetchMoreData}
          hasMore={displayedProducts.length < products.length}
          loader={<h4>Loading...</h4>}
        >
          {/* <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            > */}
          <Grid container className="lg:w-[80%] ml-auto mr-auto gap-y-8">
            {displayedProducts.map((product) => {
              return (
                <Grid
                  xs={6}
                  sm={4}
                  md={4}
                  lg={3}
                  rowSpacing={2}
                  key={product.id}
                >
                  <ProductCardDetails
                    id={product.id}
                    name={product.name}
                    image={product.img}
                    price={product.price}
                  />
                </Grid>
              );
            })}
            {/* </Stack> */}
          </Grid>
        </InfiniteScroll>
      </p>
    </div>
  );
};

export default Products;
