import React, { useState } from "react";
import Booking_image from "/Images/order_image.png";

export default function Sitbook() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phonenumber: "",
    massage: "",
  });

  const handeldata = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phonenumber, massage } = userdata;
    const res = await fetch(
      "https://taste-perfect-default-rtdb.firebaseio.com/userdatarecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          massage,
        }),
      },
    );
    if (res) {
      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
      }, 4000);
    } else {
      alert("Something went wrong");
    }
    setuserdata({
      name: "",
      email: "",
      phonenumber: "",
      massage: "",
    });
  };

  return (
    <div className="bg-white h-full flex justify-center items-center pt-5 ">
      <div className="border border-black flex flex-col md:flex-row md:max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 px-6 py-8">
          <img
            className="h-auto w-full mx-auto"
            src={Booking_image}
            alt="Booking_form"
          />
        </div>
        <div className="w-full px-6 py-8 mx-auto md:w-1/2   bg-white ">
          {showThankYou ? (
            <div className="text-center text-yellow-600 pt-44">
              <h2 className="text-2xl mb-4">Thank you for submitting</h2>
              <p>We will Contract You soon</p>
            </div>
          ) : (
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userdata.name}
                  onChange={handeldata}
                  className="shadow-lg appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userdata.email}
                  onChange={handeldata}
                  className="shadow-lg appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phonenumber"
                  value={userdata.phonenumber}
                  onChange={handeldata}
                  className="shadow-lg appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="massage"
                  value={userdata.massage}
                  onChange={handeldata}
                  className="shadow-lg appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
