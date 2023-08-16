import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Nav3 from "../components/Nav3";
import { useSelector } from "react-redux";
import "../styles/home.css";

const Home = () => {
  const { dark } = useSelector((state) => state.nav);

  // useEffect(() => {
  //   console.log(dark);
  // }, [dark]);

  return (
    <>
      <div className={dark === true ? "overlay-dark" : ""}>
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <div className="h-[100vh] w-[100vw]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </>
  );
};

export default Home;
