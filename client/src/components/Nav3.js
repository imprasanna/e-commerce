import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav3 = () => {
  return (
    <Wrapper>
      <div className="nav3">
        <div className="categories">
          <div className="categories-text">All Categories</div>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </div>

        <div className="nav-menu">
          <div>Home</div>
          <div>New Arrivals</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #292560;
  width: 100%;
  height: 55px;

  .nav3 {
    width: 77%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    color: white;

    .categories {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 167px;
      padding: 7px 10px 7px 10px;
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      cursor: pointer;

      .categories-text {
        font-size: 0.9rem;
        user-select: none;
      }
    }

    .nav-menu {
      display: flex;

      div {
        text-transform: uppercase;
        font-size: 1.1rem;
        margin-left: 40px;
        cursor: pointer;
        font-weight: 600;
        user-select: none;

        &:hover {
          color: #fdb03e;
        }
      }
    }
  }
`;

export default Nav3;
