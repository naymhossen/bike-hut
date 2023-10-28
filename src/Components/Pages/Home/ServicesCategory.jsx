/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServicesCategory = ({ service }) => {
  const { _id, img, price, title } = service || {};

  return (
    <div>
      <div className="shadow-md mt-8 bg-gray-100 space-y-3 rounded-xl">
        <div>
          <img className="w-full h-64 rounded-t-xl" src={img} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="font-bold flex justify-between items-center">
            <p>${price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn text-orange-600">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
