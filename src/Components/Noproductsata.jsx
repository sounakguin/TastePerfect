import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Noproductsata() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setProduct(data.meals[0]);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">No Product Data Found</h1>
        {/* Add additional content or error message here */}
      </div>
    );
  }

  return (
    <div className=" mx-auto p-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <img
            src={product.strMealThumb}
            alt={product.strMeal}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex">
            <p className="text-xl">Item Name:</p>
            <h1 className="text-xl font-bold mb-4"> {product.strMeal}</h1>
          </div>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="flex flex-wrap text-black">
            {Object.entries(product)
              .filter(
                ([key, value]) => key.startsWith("strIngredient") && value
              )
              .map(([key, value], index, array) => (
                <span key={key}>
                  {value}
                  {index !== array.length - 1 && " , "}{" "}
                </span>
              ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
          <p className="text-black">{product.strInstructions}</p>
          <p className="text-black mt-6">
            Youtube Instruction :
            <a
              href={product.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-700"
            >
              {product.strYoutube}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
