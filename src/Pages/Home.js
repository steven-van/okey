import React from "react";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <div className="w-32">
          <Logo />
        </div>
        <div className="flex justify-center items-center space-x-2 my-2">
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;
