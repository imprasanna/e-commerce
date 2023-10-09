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
          <div className="details-blocks-container">
            <Carousel>
              {productsShow.img &&
                productsShow.img.map((item, i) => {
                  <img src={item.url} key={item.url} alt={`Slide ${i + 1}`} />;
                })}
            </Carousel>

            <div className="details-block-1">
              <h2>{productsShow.name}</h2>
              <p>Product #{productsShow.id}</p>
            </div>

            <div className="details-block-2">
              <ReactStars {...options} />
              <span>{productsShow.numOfReviews} Reviews</span>
            </div>

            <div className="details-block-3">
              <h1>{productsShow.price}</h1>
              <div className="details-block-3.1">
                <div className="details-block-3.1.1">
                  <button>-</button>
                  <input value="1" type="number" />
                  <button>-</button>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>

            <p>
              Status:
              <b
                className={
                  productsShow.stock >= 1 ? "text-red-500" : "text-green-600"
                }
              >
                {productsShow.stock >= 1 ? "Instock" : "Out of Stock"}
              </b>
            </p>

            <div className="details-block-4">
              Description: {productsShow.description}
            </div>
            <button>Submit Review</button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
