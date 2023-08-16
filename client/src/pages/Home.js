import React, { useEffect } from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { useSelector } from "react-redux";
import "../styles/home.css";

const Home = () => {
  const dark = useSelector((state) => state.nav);

  useEffect(() => {
    console.log("DARK", dark);
  }, [dark]);

  return (
    <>
      <div className={dark ? "overlay-dark" : ""}>
        <Nav1 />
        <Nav2 />
        <Nav3 />
      </div>
    </>
  );
};

export default Home;
