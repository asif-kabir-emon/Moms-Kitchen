import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Food = ({ food }) => {
  const { _uid, food_name, image, rating, price, detail } = food;
  return (
    <div>
      <div className="card m-5 xl:w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="Food" className="max-w-sm rounded-t-xl" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{food_name}</h2>
          <p>
            {detail.length > 100 ? (
              <>
                {detail.slice(0, 100) + " ... "}
                <Link className="text-amber-500 text-justify">Read More</Link>
              </>
            ) : (
              <>{detail}</>
            )}
          </p>
          <div className="flex justify-between text-orange-600">
            <p>Price: ${price}</p>
            <span className="flex items-center">
              Rating: <FaStar className="text-yellow-500 mx-1"></FaStar>
              {rating}
            </span>
          </div>
          <div className="">
            <button className="btn border-0 bg-orange-500 hover:bg-orange-600 w-full">
              Read in Deatail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
