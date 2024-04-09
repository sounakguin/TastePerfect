import React from "react";
import { Link } from "react-router-dom";

function OrderSuccessMessage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-lg shadow-md animate-fade-in max-w-96 text-center z-20">
        <strong className="font-bold block mb-2">
          Order Placed Successfully!
        </strong>
        <p className="mb-4">Your order has been successfully placed.</p>
        <div className="bg-white border border-black rounded-lg shadow-md p-4 animate-slide-left">
          <h1 className="text-lg font-semibold mb-2">
            Thank you for your purchase!
          </h1>
          <p>Your order has been successfully placed.</p>
        </div>
        <p className="mt-9"></p>
        <Link to="/Home">
          <button
            className="absolute bottom-2 right-8 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
          >
            Close
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccessMessage;
