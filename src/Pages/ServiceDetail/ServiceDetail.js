import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/UserContext";
import useTitle from "../../Hooks/useTitle";
import { FaUserCircle } from "react-icons/fa";

const ServiceDetail = () => {
  const food = useLoaderData();
  const { _id, food_name, image, rating, price, detail } = food;
  useTitle(`${food_name}`);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/reviewsByFoodId/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  const handlAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review_text = form.review.value;
    const review_time = new Date().getTime();
    const reviewer_id = user.uid;
    const reviewer_name = user.displayName;
    const reviewer_email = user.email;
    const reviewer_image = user.photoURL;
    const review_food_id = _id;

    const review = {
      review_food_id,
      review_text,
      review_time,
      reviewer_id,
      reviewer_name,
      reviewer_email,
      reviewer_image,
    };

    console.log(review);

    fetch(`http://localhost:4000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Review Added");
          form.reset();

          fetch(`http://localhost:4000/reviewsByFoodId/${_id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setReviews(data);
            });
        }
      });
  };

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
      <div className="my-6 bg-slate-100 p-4 rounded-lg">
        <h1 className="text-2xl md:text-3xl text-center">Reviews</h1>
        <div>
          {reviews?.length > 0 ? (
            <>
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-slate-300 p-4 my-2 rounded-lg"
                >
                  <div className="flex flex-row items-center">
                    {review?.reviewer_image === null ? (
                      <>
                        <FaUserCircle className="text-2xl"></FaUserCircle>
                      </>
                    ) : (
                      <>
                        <img
                          src={review.reviewer_image}
                          className="rounded-full w-8"
                          alt=""
                        />
                      </>
                    )}
                    <p className="font-bold text-base mx-2">
                      {review.reviewer_name}
                    </p>
                  </div>
                  <div className="text-xl mt-3">
                    <p>{review.review_text}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="text-center text-lg font-semibold my-4">
                No review yet
              </p>
            </>
          )}
        </div>
        {user?.uid ? (
          <>
            <form onSubmit={handlAddReview} className="my-4">
              <div className="form-control">
                <textarea
                  name="review"
                  placeholder="Write your review"
                  className="textarea textarea-bordered h-20"
                  required
                ></textarea>
              </div>
              <div className="my-2 text-center">
                <input
                  type="submit"
                  value="Submit your review"
                  className="btn bg-slate-500 normal-case w-full"
                />
              </div>
            </form>
          </>
        ) : (
          <>
            <h4 className="text-xl text-center my-3">
              Please
              <Link
                to="/login"
                state={{ from: location }}
                className="text-blue-700 mx-1 font-sans"
              >
                Login
              </Link>
              to add review
            </h4>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
