import React, { useState } from "react";
import { Link } from "react-router-dom";

function YourPageComponent() {
 

  return (
    <div>
     
     <div class="flex justify-center items-center mt-10 mb-10">
  <div class="bg-white border-2 border-black text-green-700 px-8 py-6 rounded-lg drop-shadow-2xl shadow-md max-w-96 text-center">
    <strong class="font-bold block mb-2">
      Order Placed Successfully!
    </strong>
    <p class="mb-4">Your order has been successfully placed.</p>
    <div class="bg-white border border-black rounded-lg shadow-md p-4">
      <h1 class="text-lg font-semibold mb-2">
        Thank you for your purchase!
      </h1>
      <p>Your order has been successfully placed.</p>
    </div>
    <p class="mt-6"></p>
    <a href="/Home" class="block">
      <button class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none">
        Close
      </button>
    </a>
  </div>
</div>

      
    </div>
  );
}

export default YourPageComponent;
