import React from "react";
import { useSelector } from "react-redux";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductDetail = () => {
  let { product } = useSelector((state) => state.product);

  return (
    <div>
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <div className="w-[80%] ml-auto mr-auto mt-4 mb-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
        <Paper sx={{ background: "#f1f1f1" }} elevation={1}>
          This is a paper
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetail;
