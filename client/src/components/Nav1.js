import React from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";

const Nav1 = () => {
  return (
    <Wrapper>
      <div className="nav1">
        <p className="nav1-text">Welcome to our shop!</p>
        <div className="login">
          <LoginIcon sx={{ fontSize: "1rem" }} />
          <div>Sign in</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-bottom: 2px solid #f8f8f8;

  .nav1 {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav1-text {
    color: #cdcdcd;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .login {
    color: white;
    display: flex;
    align-items: center;
    background-color: #fdb03e;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: white;
      outline: 1px solid #fdb03e;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #fdb03e;
      user-select: none;
    }

    div {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
`;

export default Nav1;
