import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

//  {
//     "food_name": "Wontons",
//     "image": "https://www.themealdb.com/images/media/meals/1525876468.jpg",
//     "rating": 5.0,
//     "price": 20,
//     "detail": "A wonton is a type of Chinese dumpling commonly found across regional styles of Chinese cuisine. It is also spelled wantan or wuntun in transliteration from Cantonese and wenden from Shanghainese."
//   },

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_name = form.food_name.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = 0;
    const detail = form.detail.value;

    const food = { food_name, image, price, rating, detail };

    // console.log(food);

    fetch(`https://moms-kitchen-service-server.vercel.app/foods`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added the food");
          form.reset();
        }
      });
  };

  return (
    <div className="mx-3 my-8">
      <h1 className="text-xl md:text-4xl text-center mb-8">Add Food Item</h1>
      <form onSubmit={handleAddService}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Food name</span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Food Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Food image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              value="0"
              className="input input-bordered w-full"
              readOnly
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Detail</span>
          </label>
          <textarea
            name="detail"
            placeholder="Detail"
            className="textarea textarea-bordered h-24"
            required
          ></textarea>
        </div>
        <div className="my-8 text-center">
          <input
            type="submit"
            value="Add Food"
            className="btn btn-primary w-48"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
