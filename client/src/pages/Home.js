import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import HomeBody from "../components/HomeBody";
import { useSelector } from "react-redux";
import "../styles/home.css";
// import {
//   darkenOverlay,
//   hideCrossIcon,
//   setMenuOpen,
// } from "../store/slices/NavSlice";

const Home = () => {
  // const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.nav);

  // const handleOutsideClick = () => {
  //   if (dark) {
  //     dispatch(setMenuOpen(false));
  //     dispatch(darkenOverlay(false));
  //     dispatch(hideCrossIcon(true));
  //   }
  // };

  return (
    <>
      <div
        // onClick={handleOutsideClick}
        className={dark === true ? "overlay-dark" : ""}
      >
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <HomeBody />
      </div>
    </>
  );
};

export default Home;
