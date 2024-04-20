import React, { useState } from "react";

import PlaceorderFrom from "./PlaceorderFrom";

export default function Cart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(calculateTotal());
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  const clearcart = () => {
    setCart([]);
  };

  // Function to calculate the total price
  function calculateTotal() {
    const fixedPrice = 16; // Fixed price per item
    return fixedPrice * cart.length;
  }

  // Function to handle removing an item from the cart
  function handleRemove(index) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotalPrice(calculateTotal() - 16);
  }

  return (
    <div className="bg-gray-100 p-4">
      {cart.length === 0 ? (
        <div>
          <p>Cart is empty</p>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              className="flex items-center justify-between border-b-2 py-2"
              key={index}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="h-16 w-16 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="pl-10">
                      <strong>Item Name</strong>: {item.strMeal}
                    </div>
                    <div className="ml-4">
                      <strong>Category</strong>: {item.strCategory}
                    </div>
                    <div className="ml-4">
                      <strong>Origin</strong>: {item.strArea}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <div>
              <span className="font-bold">Total price of your Cart Items:</span>
              <p>${totalPrice}</p>
            </div>
            <div>
              <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleModal}
              >
                Place Order
              </button>
              <PlaceorderFrom
                isVisible={isModalVisible}
                clearcart={clearcart}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
