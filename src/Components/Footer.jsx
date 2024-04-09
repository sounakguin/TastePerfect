import React from "react";
import logo from "../Images/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-6">
      <div className="mx-auto flex flex-col md:flex-row items-center">
        <div className="pl-16 mb-4 md:mb-0 text-center md:text-left">
          <a href="#" className="flex items-center text-white">
           <img className="h-20 w-auto object-cover cursor-pointer" src={logo} alt=""/>
          </a>
          <p className="mt-2 text-sm">
            Awo Order Karo and Enjoy Karo Khana
          </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <div className="pt-12 pl-24">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-12 pl-24">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-12 pl-24">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-12 pl-24">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fourth Link
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg pt-12 pl-28 font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2 pl-28 pt-2">
              <a
                href="#"
                className="text-white hover:text-indigo-500 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-500 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
  href="#"
  className="text-white hover:text-indigo-500 transition duration-300"
>
  <svg
    fill="currentColor" // Set the fill color to currentColor
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
</a>

              <a
                href="#"
                className="text-white hover:text-indigo-500 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-6 text-sm text-center">
        <p>© 2024 Sounak Guin. All rights reserved.</p>
        <p>
          Developed By{" "}
          <a href="#" className="text-yellow-400 hover:text-green-500">
            Sounak Guin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
