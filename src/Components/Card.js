import React from "react";
import Star from "./Star";

const Card = ({ data }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-500">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/imgs/property-image.jpg"
          alt="product image"
        />
      </a>

      <div className="p-1 text-center bg-red-400 text-white text-sm font-medium">
        {data.objectif_gestion[0].toUpperCase() +
          data.objectif_gestion.slice(1)}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {data.adresse}
            </h5>
          </a>
          <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
            {data.surface} m², {data.nb_piece} rooms
          </p>
        </div>
        <div className="flex justify-between items-center mt-2.5 mb-5">
          <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
            {data.type[0].toUpperCase() + data.type.slice(1)}
          </p>
          <div className="flex items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-2">
              5.0
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${data.prix}
          </span>
          <a
            href="#"
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
