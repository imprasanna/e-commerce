import React from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";

const Nav1 = () => {
  return (
    <Wrapper>
      <p className="nav1-text">Welcome to our shop!</p>
      <div className="login">
        <LoginIcon />
        <div>Sign in</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #f8f8f8;

  .nav1-text {
    color: #cdcdcd;
    text-transform: uppercase;
  }

  .login {
    color: #727272;
    display: flex;

    div {
      font-size: 1.3rem;
      margin-left: 0.5rem;
    }
  }
`;

export default Nav1;
