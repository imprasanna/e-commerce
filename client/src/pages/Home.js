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
    if (dark) {
      dispatch(setMenuOpen(false));
      dispatch(darkenOverlay(false));
      dispatch(hideCrossIcon(true));
    }
  };

  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={dark === true ? "overlay-dark" : ""}
      >
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <div className="body-wrapper">
          <div className={dark === true ? "dark-image" : ""}>
            <div className="banner w-[100%] relative top-0 ml-auto mr-auto" />
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
