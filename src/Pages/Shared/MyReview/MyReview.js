import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const MyReview = ({ review, handleDeleteReview, updateReviews }) => {
  const { _id, review_text, review_food_id } = review;
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(
      `https://moms-kitchen-service-server.vercel.app/foods/${review_food_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const updateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review_text = form.review.value;

    fetch(`https://moms-kitchen-service-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review_text: { review_text } }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Update Successfully");
        updateReviews();
      });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={service.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service.food_name}</div>
            <div className="text-sm">Price: ${service.price}</div>
          </div>
        </div>
      </td>
      <td colSpan="2">{review_text}</td>
      <th>
        {/* The button to open modal */}
        <label htmlFor="my-edit-review-modal" className="btn btn-ghost btn-xs">
          <FaPencilAlt className="text-sm"></FaPencilAlt>
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="my-edit-review-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl relative">
            <label
              htmlFor="my-edit-review-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Update Your Review</h3>
            <form onSubmit={updateReview}>
              <div className="form-control">
                <textarea
                  name="review"
                  placeholder="Write your review"
                  className="textarea font-normal textarea-bordered h-24 mt-5"
                  defaultValue={review_text}
                  required
                ></textarea>
              </div>
              <div className="modal-action">
                <label htmlFor="my-edit-review-modal" className="btn">
                  Close
                </label>
                <label htmlFor="my-edit-review-modal">
                  <input value="Update" type="submit" className="btn" />
                </label>
              </div>
            </form>
          </div>
        </div>
        <button className="btn btn-ghost btn-xs">
          <FaTrashAlt
            className="text-sm"
            onClick={() => handleDeleteReview(_id)}
          ></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default MyReview;
