import React from "react";
import useTitle from "../../../Hooks/useTitle";
import foodImage from "../../../Assets/Images/food-catalog.jpg";
import "./Home.css";
import FoodService from "../FoodService/FoodService";
import { Link } from "react-router-dom";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="p-3 container">
        <img src={foodImage} alt="" className="rounded-xl w-full" />
        <div className="absolute top-40 right-10 text-3xl text-white font-bold">
          Hello
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center pt-10">Our Services</h2>
      <FoodService className="p-3"></FoodService>
      <div className="flex justify-center">
        <Link to="/services">
          <button className="btn btn-primary text-xl px-10">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
