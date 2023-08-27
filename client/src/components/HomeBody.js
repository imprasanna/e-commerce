import React from "react";
import "../styles/homebody.css";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCardDetails from "./ProductCardDetails";
import products from "../utils/products";

const HomeBody = () => {
  return (
    <div>
      <div className="body-wrapper">
        <div className="banner"></div>
        <div className="body">
          <p
            style={{ textAlign: "center" }}
            className="text-2xl mt-12 mb-3 md:text-3xl lg:text-4xl lg:mt-16 lg:mb-8"
          >
            Our <strong>New Products</strong>
          </p>

          <p className="lg:w-[80%] ml-auto mr-auto">
            <Grid container className="lg:w-[80%] ml-auto mr-auto">
              {products.slice(0, 12).map((product) => {
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
            <p className="w-full mb-28" style={{ textAlign: "center" }}>
              <Link to="/products">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#fdb03e" }}
                >
                  <span className="mr-[5px]">View All Products</span>
                  <AiOutlineArrowRight />
                </Button>
              </Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
