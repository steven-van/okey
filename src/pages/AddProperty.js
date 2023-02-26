import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const AddProperty = () => {
  const [owners, setOwners] = useState([]);
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [type, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [nbRooms, setNbRooms] = useState(0);
  const [surfaceArea, setSurfaceArea] = useState(0);
  const [condition, setCondition] = useState("");
  const [purpose, setPurpose] = useState("");
  const [price, setPrice] = useState(0);
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const handleFormValidation = (property) => {
    for (const key in property) {
      if (property[key] === "" || property[key] === 0) {
        setIsFormValid(false);
        return false;
      }
    }
    setIsFormValid(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const property = {
      owner: owner.trim(),
      propertyAddress: address.trim(),
      propertyType: type,
      city: city.trim(),
      nbRooms: nbRooms,
      surfaceArea: surfaceArea,
      propertyCondition: condition,
      purpose: purpose,
      price: price,
      availabilityDate: availabilityDate,
    };

    if (handleFormValidation(property)) {
      axios
        .post("http://localhost:8000/properties/add-property", property)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/owners",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      setOwners(res.data);
    });
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <Header />
        <div className="w-full p-4 bg-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white md:text-center">
              Register a property
            </h5>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 space-y-2">
                <div>
                  <label
                    for="owner"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Owner
                  </label>
                  <select
                    onChange={(e) => setOwner(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="owner"
                    required
                  >
                    {owners.map((owner) => {
                      return (
                        <option value={`${owner.nom};${owner.adresse}`}>
                          {owner.prenom} {owner.nom}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label
                    for="property-address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Property address
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    id="property-address"
                    placeholder="Property address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="property-type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Property type
                  </label>
                  <select
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="property-type"
                    required
                  >
                    <option value="appartement">Apartment</option>
                    <option value="maison">House</option>
                  </select>
                </div>
                <div>
                  <label
                    for="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    id="city"
                    placeholder="City"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="number-rooms"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number of rooms
                  </label>
                  <input
                    onChange={(e) => setNbRooms(e.target.value)}
                    type="number"
                    id="number-rooms"
                    min="1"
                    placeholder="Number of rooms"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2 mt-2 md:mt-0">
                <div>
                  <label
                    for="surface-area"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Surface area (m²)
                  </label>
                  <input
                    onChange={(e) => setSurfaceArea(e.target.value)}
                    type="number"
                    id="surface"
                    min="1"
                    placeholder="Surface area"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="condition"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Property condition
                  </label>
                  <select
                    onChange={(e) => setCondition(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="condition"
                    required
                  >
                    <option value="bon etat">Good</option>
                    <option value="tres bon etat">Very good</option>
                    <option value="a renover">To renovate</option>
                  </select>
                </div>
                <div>
                  <label
                    for="purpose"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sale/Rental
                  </label>
                  <select
                    onChange={(e) => setPurpose(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="purpose"
                    required
                  >
                    <option value="vente">Sale</option>
                    <option value="location">Rental</option>
                  </select>
                </div>
                <div>
                  <label
                    for="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    id="Price"
                    placeholder="Price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="availability-date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Availability date
                  </label>
                  <input
                    onChange={(e) => setAvailabilityDate(e.target.value)}
                    id="availability-date"
                    type="date"
                    placeholder="Availability date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {!isFormValid && (
              <p className="text-sm m-auto font-medium tracking-tight text-red-600 text-center animate-pulse">
                Please fill in all fields
              </p>
            )}

            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
