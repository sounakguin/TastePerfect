import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products({ cart, setcart, warning, setwarning }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [renderData, setRenderData] = useState(null);
  const [filterOption, setFilterOption] = useState("All");

  const fetchData = async (term) => {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
      if (filterOption !== "All") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterOption}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log("Response from API:", data);
      if (data.meals) {
        setRenderData(data.meals);
      } else {
        console.log("Meals not found in response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm, filterOption]);

  const handleaddtocart = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.idMeal === product.idMeal) {
        ispresent = true;
      }
    });
    if (ispresent === true) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 3000);
    } else {
      setcart([...cart, item]);
    }
  };
  const handelsearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className="bg-gray-900">
     <div className="my flex justify-center lg:justify-between lg:items-end flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col sm:flex-row mt-5 lg:mt-10 ml-3 lg:ml-0">
    <label className="text-white lg:pt-1 lg:text-xl w-36 lg:w-auto  pt-1 ">Search by Name :&nbsp;</label>
    <input
      type="text"
      className="h-10 bg-white w-80 lg:w-96 pr-8 pl-5 focus:shadow focus:outline-none rounded-lg text-black border-2 border-yellow-400 "
      placeholder="Search with Item Name..."
      value={searchTerm}
      onChange={handelsearch}
    />
  </div>
  <div className="flex flex-col sm:flex-row mt-5 lg:mt-10 ml-3 lg:ml-0 ">
    <label className="text-white lg:text-xl w-36 lg:w-auto pt-1 lg:pt-1">Filter by Category :&nbsp;</label>
    <select
      className="h-10 bg-white w-60 lg:w-96 pr-8 pl-5 focus:shadow focus:outline-none rounded-lg text-black border-2 border-yellow-400"
      value={filterOption}
      onChange={handleFilterChange}
    >
      <option value="All">All</option>
      <option value="Beef">Beef</option>
      <option value="Chicken">Continental</option>
      <option value="Seafood">Seafood</option>
      <option value="Vegetarian">Vegetarian</option>
      {/* Add more options as needed */}
    </select>
  </div>
</div>

      {warning && (
        <div className="text-white font-bold text-4xl pt-5 md:pt-10 text-center">
          Item is already present in your cart
        </div>
      )}
      <section className="text-gray-400 bg-gray-900 body-font mt-5">
        <div className="px-2 md:px-5 py-5 md:py-10 mx-auto">
          <div className="flex flex-wrap -m-2 md:-m-4">
            {renderData &&
              renderData.map((item) => (
                <div key={item.idMeal} className="lg:w-1/3 md:w-1/2 p-2 md:p-4 w-full">
                  <Link to={`/Noproductsata/${item.idMeal}`}>
                    <a className="block relative h-48 rounded-lg overflow-hidden">
                      <img
                        alt={`Thumbnail for ${item.strMeal}`}
                        className="object-cover object-center w-full h-full block border border-white"
                        src={item.strMealThumb}
                      />
                    </a>
                  </Link>
                  <div className="flex items-center justify-between mt-2 ">
                    <h2 className="text-white text-lg font-medium w-2/3 md:w-3.6/4 lg:mt-0">
                     Item name :&nbsp; {item.strMeal}
                    </h2>
                    <button
                      type="button"
                      className="px-3 py-1 md:mt-2 lg:px-4 lg:py-3 lg:mt-4 text-sm font-medium text-white bg-yellow-600 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onClick={() => handleaddtocart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                
                  <p className="text-gray-300 text-sm md:text-base">Price : 16$</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
