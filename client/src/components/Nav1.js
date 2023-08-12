import React from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <Wrapper>
      <div className="nav1">
        <p className="nav1-text">Welcome to our shop!</p>
        <div className="auth">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="login">
              <LoginIcon sx={{ fontSize: "1rem" }} />
              <div>Login</div>
            </div>
          </Link>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <div className="register">
              <PersonAddIcon sx={{ fontSize: "1rem" }} />
              <div>Register</div>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-bottom: 2px solid #e3e3e3;

  .nav1 {
    width: 80%;
    height: 37px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .auth {
      display: flex;
      width: 196px;
      align-items: center;
      justify-content: space-between;
    }
  }

  .nav1-text {
    color: #aba3a3;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .login {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdb03e;
    height: 25px;
    width: 90px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: white;
      outline: 1px solid #fdb03e;
      height: 25px;
      width: 90px;
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
  
  .register {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdb03e;
    height: 25px;
    width: 90px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: white;
      outline: 1px solid #fdb03e;
      height: 25px;
      width: 90px;
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

    
`;

export default Nav1;
