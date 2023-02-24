import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import Filter from "../components/Filter";
import Logo from "../components/UI/Logo";
import LogoutButton from "../components/LogoutButton";
import axios from "axios";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/properties",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      setProperties(res.data);
    });
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <div className="w-full flex relative justify-center items-center">
          <div className="w-32">
            <Logo />
          </div>
          <div className="absolute right-0">
            <div className="flex justify-center items-center">
              <p className="text-md font-semibold tracking-tight text-gray-900 dark:text-gray-400 mr-3">
                John Doe
              </p>
              <LogoutButton />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 my-2">
          <p className="text-gray-900 dark:text-white font-medium text-sm">
            Filter :
          </p>
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {properties.map((property) => {
            return <Card data={property} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
