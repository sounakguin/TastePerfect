import React, { useState } from "react";

export default function Contact() {
  const [contractdata, setcontractdata] = useState({
    email: "",
    number: "",
    message: "",
  });

  const [Thank, setthank] = useState(false);

  const handelchange = (event) => {
    const { name, value } = event.target;
    setcontractdata({ ...contractdata, [name]: value });
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    const { email, number, message } = contractdata;
    const res = await fetch(
      "https://taste-perfect-default-rtdb.firebaseio.com/Contractdata.json", // Fixed endpoint URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          number,
          message,
        }),
      },
    );
    if (res.ok) {
      setthank(true); // Show thank you message
      setTimeout(() => {
        setthank(false); // Hide thank you message after 3 seconds
      }, 3000);
    } else {
      alert("Your data is not saved properly");
    }
    setcontractdata({
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689694983!2d88.26495057337593!3d22.535564936984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711351568386!5m2!1sen!2sin"
            width="100%"
            height="100%"
            title="map"
            style={{
              border: "0",
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Connect With US
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We will contact you within 2 or 3 business days
            </p>

            {Thank && (
              <p className="text-blue-500 mt-2">Thank you for your interest</p>
            )}

            <form onSubmit={handelsubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contractdata.email}
                  onChange={handelchange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mobile no
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={contractdata.number}
                  onChange={handelchange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contractdata.message}
                  onChange={handelchange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit" // Changed to submit
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
