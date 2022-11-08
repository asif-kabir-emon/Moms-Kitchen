import React from "react";
import icon1 from "../../../Assets/Icons/rocket.png";
import icon2 from "../../../Assets/Icons/delivery-status.png";
import icon3 from "../../../Assets/Icons/cash-on-delivery.png";
import icon4 from "../../../Assets/Icons/24-hours.png";

const AboutService = () => {
  return (
    <div className="flex justify-center my-10 mx-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex">
          <img src={icon1} alt="" className="h-14" />
          <div className="pl-3">
            <p className="font-bold">Free Delivery</p>
            <p>Delivery within 1 hour</p>
          </div>
        </div>
        <div className="flex">
          <img src={icon2} alt="" className="h-14" />
          <div className="pl-3">
            <p className="font-bold">No Question Asked Return</p>
            <p>If you are not satisfied</p>
          </div>
        </div>
        <div className="flex">
          <img src={icon3} alt="" className="h-14" />
          <div className="pl-3">
            <p className="font-bold">Cash on Delivery</p>
            <p>Pay after getting your order</p>
          </div>
        </div>
        <div className="flex">
          <img src={icon4} alt="" className="h-14" />
          <div className="pl-3">
            <p className="font-bold">24/7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
