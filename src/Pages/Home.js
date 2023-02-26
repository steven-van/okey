import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import Filter from "../components/Filter";
import axios from "axios";
import Header from "../components/Header";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/properties")
      .then((res) => {
        console.log(res.data);
        setProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row justify-center items-center  my-2">
          <p className="text-gray-900 dark:text-white font-medium text-sm mb-2 md:mb-0 mr-2">
            Filter :
          </p>
          <div className="space-x-2">
            <Filter />
            <Filter />
            <Filter />
            <Filter />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {properties.map((property) => {
            return <Card data={property} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
