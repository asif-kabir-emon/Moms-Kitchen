import React from "react";
import useTitle from "../../../Hooks/useTitle";
import FoodService from "../FoodService/FoodService";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import AboutService from "../AboutService/AboutService";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-2xl font-bold text-center pt-10 text-orange-600">
        Services
      </h2>
      <AboutService></AboutService>
      <h1 className="text-4xl font-bold text-center mt-2">Our Food Items</h1>
      <p className="text-center mt-2">
        Our food item's ingridients are fresh. We give free delivery all orders
        in our areas.
        <br />
        The order will be deliveried within one hour.
      </p>
      <FoodService className="p-3"></FoodService>
      <div className="flex justify-center mb-5">
        <Link to="/services">
          <button className="btn btn-warning  px-10">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
