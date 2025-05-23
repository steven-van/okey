import React, { useEffect, useState } from "react";
import Card from "../Components/UI/Card";
import Filter from "../Components/FilterButton";
import axios from "axios";
import Header from "../Components/Header";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [purposeFilter, setPurposeFilter] = useState();
  const [availabilityFilter, setAvailabilityFilter] = useState();

  const getProperties = () => {
    axios
      .get("http://localhost:8000/properties")
      .then((res) => {
        console.log(res.data);
        setProperties(res.data);
        setFilteredProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const clearFilters = () => {
    setPurposeFilter();
    setAvailabilityFilter();
  };

  useEffect(() => {
    const fp = properties.filter((property) => {
      return (
        (!purposeFilter || purposeFilter === property.objectif_gestion) &&
        (!availabilityFilter || availabilityFilter === property.dispo)
      );
    });
    setFilteredProperties(fp);
  }, [purposeFilter, availabilityFilter]);

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div className="g-container bg-white dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row justify-center items-center  my-2">
          <p className="text-gray-900 dark:text-white font-medium text-sm mb-2 md:mb-0 mr-2">
            Filters :
          </p>
          <div className="space-x-2">
            <Filter
              handleClick={() => setPurposeFilter("location")}
              label={"Rental"}
            />
            <Filter
              handleClick={() => setPurposeFilter("vente")}
              label={"Sale"}
            />
            <Filter
              handleClick={() => setAvailabilityFilter(1)}
              label={"Available"}
            />
            <button
              onClick={() => clearFilters()}
              className="text-white hover:bg-gray-800 font-medium text-xs p-2 rounded-full bg-gray-700"
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {filteredProperties.map((property) => {
            return <Card data={property} />;
          })}
        </div>
        {filteredProperties.length === 0 && (
          <p className="text-sm m-auto font-medium tracking-tight text-red-600 text-center animate-pulse">
            No properties matching the filter
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
