import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Food from "../Shared/Food/Food";

const Services = () => {
  useTitle("Services");
  const foods = useLoaderData();
  return (
    <div>
      <div className="flex justify-center my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods.map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
