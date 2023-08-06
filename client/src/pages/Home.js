import React from "react";
import Nav1 from "../components/Nav1";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Nav1 />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
`;

export default Home;
