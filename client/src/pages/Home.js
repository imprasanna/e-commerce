import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { useDispatch, useSelector } from "react-redux";
import { darkenOverlay } from "../store/slices/navSlice";

const Home = () => {
  const dispatch = useDispatch();

  const darkOverlay = useSelector((state) => state.nav.value);

  // const [darkOverlay, isDarkOverlay] = useState(false);

  dispatch(darkenOverlay(true));

  return (
    <div className={`overlay ml-auto mr-auto ${darkOverlay}`}>
      <Nav1 />
      <Nav2 />
      <Nav3 />
    </div>
  );
};

export default Home;
