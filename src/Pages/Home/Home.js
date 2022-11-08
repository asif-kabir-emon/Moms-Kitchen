import React from "react";
import useTitle from "../../Hooks/useTitle";
import foodImage from "../../Assets/Images/food-catalog.jpg";
import "./Home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="p-3 img-style">
        <img src={foodImage} alt="" className="rounded-xl w-full" />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
