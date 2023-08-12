import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Nav1 />
      <Nav2 />
      <Nav3 />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
`;

export default Home;
