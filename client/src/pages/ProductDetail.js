import React from "react";
import { useSelector } from "react-redux";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-stars";
import { AiOutlineHeart } from "react-icons/ai";
// import ReactImageMagnify from "react-image-magnify";

const ProductDetail = () => {
  let { productsShow } = useSelector((state) => state.product);

  const options = {
    edit: false,
    color: "#ffd700",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: productsShow.ratings,
    isHalf: true,
  };

  const carouselOptions = {
    showIndicators: true,
    showThumb: true,
    showStatus: true,
    showArrows: true,
  };

  return (
    <div>
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <div className="w-[80%] ml-auto mr-auto mt-4 mb-4">
        <Breadcrumbs className="hidden lg:block" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Typography color="text.primary">{productsShow.name}</Typography>
        </Breadcrumbs>

        <Paper sx={{ background: "#f1f1f1" }} elevation={1}>
          <div className="details-blocks-container p-4 flex">
            <div className="details-image-block w-[30%]">
              <Carousel {...carouselOptions}>
                {productsShow.img &&
                  productsShow.img.map((item, i) => {
                    return (
                      <img
                        src={item.url}
                        key={item.url}
                        alt={`Slide ${i + 1}`}
                      />
                      // <div className="fluid">
                      //   <div className="fluid-image-container">
                      //     <ReactImageMagnify
                      //       key={i + 1}
                      //       {...{
                      //         smallImage: {
                      //           alt: `${productsShow.name}`,
                      //           src: `${item.url}`,
                      //           isFluidWidth: true,
                      //         },
                      //         largeImage: {
                      //           src: `${item.url}`,
                      //           width: 1426,
                      //           height: 2000,
                      //         },
                      //         lensStyle: { background: "rgba(0, 0, 0, 0.4)" },
                      //       }}
                      //     />
                      //   </div>
                      // </div>
                    );
                  })}
              </Carousel>
            </div>

            <div className="details-text-blocks ml-8 w-full">
              <div className="details-block-1">
                <h1 className="text-3xl font-medium">{productsShow.name}</h1>
                {/* <p>Product #{productsShow.id}</p> */}
              </div>

              <div className="details-block-2 flex justify-between items-center py-4 border-solid border-[#b5b5b5] border-b-[1px]">
                <div className="flex items-center">
                  <ReactStars {...options} />
                  <span className="ml-2 pr-2 border-r-[1px] border-solid border-[#b5b5b5]">
                    {productsShow.ratings}
                  </span>
                  <span className="pl-2">
                    {productsShow.numOfReviews} Reviews
                  </span>
                </div>

                <div>
                  <AiOutlineHeart className="text-3xl mr-8" />
                </div>
              </div>

              <div className="details-block-3">
                <h1 className="text-3xl font-semibold text-green-500 py-4">
                  Rs. {productsShow.price}
                </h1>
                <div className="details-block-3.1">
                  <p>
                    Status:
                    <b
                      className={
                        productsShow.stock >= 1
                          ? "text-red-500"
                          : "text-green-600"
                      }
                    >
                      {productsShow.stock >= 1 ? " Instock" : " Out of Stock"}
                    </b>
                  </p>

                  <div className="details-block-3.1.1 mt-2">
                    <button className="bg-[#f57224] text-white px-3 rounded-l-md">
                      -
                    </button>
                    <input
                      value="1"
                      type="number"
                      className="w-[5%] text-center focus:outline-none"
                    />
                    <button className="bg-[#f57224] text-white px-3 rounded-r-md">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="details-block-4 mt-6">
                <span className="font-semibold">Description:</span>
                <br />
                {productsShow.description}
              </div>

              <div className="w-[40%] mt-6 flex justify-between">
                <button className="bg-[#2abbe8] text-white text-lg px-10 py-2">
                  Buy Now
                </button>
                <button className="bg-[#f57224] text-lg text-white px-10 py-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
