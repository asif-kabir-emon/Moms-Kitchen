import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ServiceDetail = () => {
  const food = useLoaderData();
  const { _id, food_name, image, rating, price, detail } = food;
  useTitle(`${food_name}`);

  return (
    <div className="my-6 mx-3">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h1 className="text-4xl md:text-6xl text-center">{food_name}</h1>
        <div className="flex justify-center my-4">
          <img src={image} className="rounded-lg" alt="" />
        </div>
        <p className="text-lg ">
          <b>Details:</b> {detail}
        </p>
        <p className="mt-3 text-lg">
          <b>Price:</b> ${price}
        </p>
        <p className="mt-1 text-lg">
          <b>Rating:</b> {rating}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
