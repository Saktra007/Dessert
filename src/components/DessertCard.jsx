import React, { useState } from "react";

const DessertCard = ({ product }) => {
  const { name, category, image, price, description, calories, rating } =
    product;
  const [open, setOpen] = useState(false);
  return (
    <div className="w-64 border rounded-md bg-white items-center flex-1 justify-center text-center text-cyan-900 m-6 shadow-lg">
      <div>
        <img
          src={image}
          alt=""
          className="object-cover h-56 w-full rounded-t-md"
        />
      </div>
      <div className="p-5">
        <div className="flex">
          <h3 className="text-xl font-bold p-1">{name}</h3>
        </div>{" "}
        <h6 className="font-bold pb-3">{category}</h6>
        <button
          className="font-bold mb-3 text-base transition-all duration-500 bg-blue-600 text-white px-4 py-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          View info
        </button>
        {open && (
          <div className="text-blue-950 transition-all duration-500">
            <p className="text-lg p-1">{description}</p>
            <p className="text-lg p-1">Calories :{calories}</p>
          </div>
        )}
        <h4 className="p-1 text-lg mb-1">Rating:{rating}</h4>
        <h5 className="text-zinc-900 font-medium p-1 ">{price} $</h5>
        <button className="font-bold">Order Now</button>
      </div>
    </div>
  );
};

export default DessertCard;
