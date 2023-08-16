import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { useDispatch, useSelector } from "react-redux";
import "../styles/home.css";
import {
  darkenOverlay,
  hideCrossIcon,
  setMenuOpen,
} from "../store/slices/NavSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.nav);

  const handleOutsideClick = () => {
    dispatch(setMenuOpen(false));
    dispatch(darkenOverlay(false));
    dispatch(hideCrossIcon(true));
  };

  return (
    <>
      <div className={dark === true ? "overlay-dark" : ""}>
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <div onClick={handleOutsideClick} className="h-[100vh] w-[100vw]"></div>
      </div>
    </>
  );
};

export default Home;
