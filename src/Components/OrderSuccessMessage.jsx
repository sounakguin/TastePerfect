import React from "react";

function YourPageComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-black text-green-700 px-8 py-6 rounded-lg max-w-md w-full mx-4 sm:mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
        <strong className="font-bold block mb-4 text-xl sm:text-2xl">
          Order Placed Successfully!
        </strong>
        <p className="mb-4">Your order has been successfully placed.</p>
        <div className="bg-white border border-black rounded-lg shadow-md p-4">
          <h1 className="text-lg font-semibold mb-2">Thank you for your purchase!</h1>
          <p>Your order has been successfully placed.</p>
        </div>
        <p className="mt-6"></p>
        <a href="/" className="block">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}

export default YourPageComponent;
