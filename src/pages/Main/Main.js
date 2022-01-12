import React from "react";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import PetProductBox from "../../components/Main/PetProductBox";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <MainSlider />
      <PetProductBox />
    </div>
  );
};

export default Main;
