import React, { useEffect, useState } from "react";
import Food from "../../Shared/Food/Food";

const FoodService = () => {
  // const foods = useLoaderData();
  const [foods, setFoods] = useState([]);
  const size = 3;
  useEffect(() => {
    const url = `http://localhost:4000/foods?size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data["foods"]);
      });
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <Food key={food._id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default FoodService;
