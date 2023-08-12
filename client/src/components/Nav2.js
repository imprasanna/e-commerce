import React from "react";
import logo from "../utils/logo.png";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Nav2 = () => {
  return (
    <Wrapper>
      <div className="nav2">
        <img src={logo} alt="logo" style={{ height: "50%" }} />
        <div className="search-bar">
          <input placeholder="Search for products" />
          <button>
            <SearchIcon sx={{ color: "white" }} />
          </button>
        </div>
        <div className="fav-and-cart">
          <IconButton>
            <FavoriteIcon sx={{ fontSize: "2.5rem", color: "black" }} />
          </IconButton>
          <IconButton>
            <Badge color="secondary" badgeContent={0}>
              <ShoppingCartIcon sx={{ fontSize: "2.5rem", color: "black" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav2 {
    width: 80%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .fav-and-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 150px;
    }

    .search-bar {
      display: flex;
      align-items: center;

      input {
        width: 600px;
        height: 50px;
        border-top: 2px solid #e0e0e0;
        border-bottom: 2px solid #e0e0e0;
        border-left: 2px solid #e0e0e0;
        border-radius: 5px 0 0 5px;
        border-right: 0px solid transparent;
        padding-left: 1rem;
        font-size: 1.2rem;
        color: #959595;
        font-family: "Ysabeau Infant", sans-serif;

        &:focus {
          outline: none;
        }

        &::placeholder {
          font-family: "Ysabeau Infant", sans-serif;
          font-size: 1.2rem;
          color: #e3e3e3;
        }
      }
      button {
        height: 55px;
        width: 100px;
        background-color: #fdb03e;
        border: none;
        border-radius: 0 5px 5px 0;

        &:hover {
          background-color: #dc9833;
        }
      }
    }
  }
`;

export default Nav2;
