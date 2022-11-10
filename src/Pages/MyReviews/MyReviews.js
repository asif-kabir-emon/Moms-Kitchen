import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import useTitle from "../../Hooks/useTitle";
import MyReview from "../Shared/MyReview/MyReview";
import toast from "react-hot-toast";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/reviewsByUserId/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const handleDeleteReview = (id) => {
    const isWantDelete = window.confirm("Do you want to delete this review?");

    if (isWantDelete) {
      fetch(`http://localhost:4000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Delete Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const updateReviews = () => {
    fetch(`http://localhost:4000/reviewsByUserId/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };

  return (
    <div className="mx-3 my-5">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service Name</th>
              <th colSpan="2">Review Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <MyReview
                key={review._id}
                review={review}
                handleDeleteReview={handleDeleteReview}
                updateReviews={updateReviews}
              ></MyReview>
            ))}
          </tbody>
        </table>
      </div>
      {reviews.length === 0 && (
        <div className="text-center text-2xl my-10">
          <p>No reviews were added</p>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
