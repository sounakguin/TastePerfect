import React, { useState, useEffect } from "react";

export default function Products({ cart, setcart, warning, setwarning }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [renderData, setRenderData] = useState(null);

  const searchRecipe = (e) => {
    e.preventDefault(); // Prevent form submission
    fetchData(searchTerm);
  };

  const fetchData = async (term) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
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
  }, []);

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
  return (
    <div className="bg-gray-900 ">
     
      <form className="max-w-md mx-auto ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={searchRecipe}
          >
            Search
          </button>
        </div>
      </form>
      {warning && (
        <div className="text-white font-bold text-4xl pt-10 text-center">Item is already present in your cart</div>
      )}
      <section className="text-gray-400 bg-gray-900 body-font mt-5">
        <div className="px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {renderData &&
              renderData.map((item) => (
                <div key={item.idMeal} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded-lg overflow-hidden">
                    <img
                      alt={`Thumbnail for ${item.strMeal}`}
                      className="object-cover object-center w-full h-full block border border-white"
                      src={item.strMealThumb}
                    />
                  </a>
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-white text-lg font-medium">
                      Item name : {item.strMeal}
                    </h2>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onClick={() => handleaddtocart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <p>Price : 16$</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
