import React, { useState } from "react";
import Instruction from "/Images/Cooking.png";

export default function PlaceOrderForm({ isVisible, clearcart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = [
      "name",
      "email",
      "mobile",
      "address",
      "cardNumber",
      "expiryDate",
      "cvv",
      "cardHolderName",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill out all required fields.");
      return;
    }

    const {
      name,
      email,
      mobile,
      address,
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
    } = formData;

    try {
      const res = await fetch(
        "https://taste-perfect-default-rtdb.firebaseio.com/Placeorderdata.json", // Ensure the endpoint is correct and has .json extension for Firebase
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            address,
            cardNumber,
            expiryDate,
            cvv,
            cardHolderName,
          }),
        },
      );

      if (res.ok) {
        alert("Your Order is submitted");
        // Clear the cart upon successful order submission
        clearcart();
        // Reset the form data
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          cardHolderName: "",
        });
        // Reset the step to 1
        setStep(1);
        // Navigate to the order success page
        window.location.href = "/OrderSuccessMessage";
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("An error occurred while submitting your order. Please try again.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    if (
      step === 1 &&
      !(formData.name && formData.email && formData.mobile && formData.address)
    ) {
      alert("Please fill all the required field");
    } else {
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <p className="text-center pt-2 pb-2 bg-gray-700 text-white">
                User Details
              </p>
              <br />
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="6"
                className="mt-1 block h-28 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="text-center">
              <p className="text-center pt-2 pb-2 bg-gray-700 text-white">
                Cooking Instruction
              </p>
              <br />
              <img
                src={Instruction}
                alt="Cooking Instructions"
                className="h-56 w-auto object-cover mx-auto"
              />
            </div>
            <div className="pt-4">
              <label htmlFor="cookingInstruction">
                Add Cooking Instruction
              </label>
              <textarea
                id="cookingInstruction"
                className="h-32 w-full p-2 border border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <p className="text-center pt-2 pb-2 bg-gray-700 text-white">
                Payment Details
              </p>
              <br />
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cardHolderName"
                className="block text-sm font-medium text-gray-700"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}
              <div className="flex justify-between">
                {step !== 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center px-4 py-2 border border-sky-500 text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Previous
                  </button>
                )}
                {step !== 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex ml-auto items-center px-4 py-2 border border-sky-500 text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Pay Out
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
