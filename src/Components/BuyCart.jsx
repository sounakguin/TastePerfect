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
          <p className="text-red-600 text-xl font-semibold  text-center">
            Cart is empty
          </p>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              className="flex flex-col md:flex-row items-center justify-between border-b-2 py-2"
              key={index}
            >
              <div className="flex flex-col md:flex-row items-center space-x-4">
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="h-16 w-16 rounded-full"
                  />
                </div>

                <div className="item-center lg:pl-10">
                  Item Name : <strong>{item.strMeal}</strong>
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

          <div className="flex flex-col md:flex-row items-center mt-4 md:justify-between">
            <div className="flex">
              <div className="font-bold items-center ">
                Total price of your Cart Items:
              </div>
              <div className="items-center pl-1">${totalPrice}</div>
            </div>

            <div className="pt-2 md:pt-0">
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
