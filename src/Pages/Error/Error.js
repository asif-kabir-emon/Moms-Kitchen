import React from "react";
import errorImage from "../../Assets/Images/error-404.webp";

const Error = () => {
  return (
    <div className="mt-2 md:mt-20">
      <div className="flex justify-center ">
        <img src={errorImage} alt="" srcset="" className="h-96" />
      </div>
      <p className="text-center">Your Come to Wrong directory</p>
    </div>
  );
};

export default Error;
