import React, { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

const Card = ({ data }) => {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-500">
        <div
          onClick={() => setShown(true)}
          className="relative flex justify-center items-center cursor-pointer "
        >
          <img
            className={`rounded-t-lg ${!data.dispo ? "blur" : ""}`}
            src="/imgs/property-image.jpg"
            alt="product image"
          />
          {!data.dispo && (
            <p className="z-10 absolute text-lg font-semibold tracking-tight text-red-500">
              Indisponible
            </p>
          )}
        </div>

        <div className="p-1 text-center bg-red-400 text-white text-sm font-medium">
          {data.objectif_gestion[0].toUpperCase() +
            data.objectif_gestion.slice(1)}
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {data.adresse}
            </h5>
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
            <button
              onClick={() => setShown(true)}
              href="#"
              className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {isShown && (
        <Modal setShown={setShown}>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center">
            <div className="max-w-lg">
              <img
                className={"rounded-t-lg"}
                src="/imgs/property-image.jpg"
                alt="product image"
              />
            </div>
            <div className="w-full h-0.5 md:w-0.5 md:h-52 md:block bg-red-500 dark:bg-gray-400 rounded-lg mx-0 md:mx-8 my-8 md:my-0"></div>

            <div className="max-w-lg">
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Price :{" "}
                </span>
                ${data.prix}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Address :{" "}
                </span>
                {data.adresse}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  City :{" "}
                </span>
                {data.ville}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Number of rooms :{" "}
                </span>
                {data.nb_piece}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Surface area :{" "}
                </span>
                {data.surface} m²
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Condition :{" "}
                </span>
                {data.etat}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Availability date :{" "}
                </span>
                {new Date(data.date_dispo).toLocaleDateString()}
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400">
                  Sale/Rental :{" "}
                </span>
                {data.objectif_gestion}
              </p>

              <p>
                <span className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400"></span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
