import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "/Images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ cartSize }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b-2 border-black text-black mx-auto flex justify-between items-center py-4">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-14 ml-4" src={logo} alt="Website logo" />
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="md:flex space-x-10">
          <li className="hover:text-blue-900">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-900">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:text-blue-900">
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="pr-4 pt-1 md:hidden cursor-pointer"
          onClick={handleMenuToggle}
        />
        {isAuthenticated ? (
          <button
            className="md:mr-6 md:mt-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : (
          <button
            className="md:mr-6 md:mt-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
        <Link to="/BuyCart" className="ml-2 mr-5 md:mr-10">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="hover:text-red-600"
          />
          <span>{cartSize}</span>
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-10">
          <div className="flex justify-between">
            <div>
              <Link to="/">
                <img
                  className="h-14 mt-4 ml-4 md:ml-16"
                  src={logo}
                  alt="Website logo"
                />
              </Link>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTimes}
                className="pt-9 pr-10 md:hidden cursor-pointer"
                onClick={handleMenuToggle}
              />
            </div>
          </div>
          <div>
            <ul>
              <li className="bg-gray-300 h-10 text-center font-semibold pt-1 text-black text-xl hover:bg-gray-400 hover:text-white">
                <Link to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li className="bg-gray-300 h-10 text-center mt-1 font-semibold pt-1 text-black text-xl hover:bg-gray-400 hover:text-white">
                <Link to="/Products" onClick={handleMenuItemClick}>
                  Products
                </Link>
              </li>
              <li className="bg-gray-300 h-10 text-center mt-1 font-semibold pt-1 text-black text-xl hover:bg-gray-400 hover:text-white">
                <Link to="/Contact" onClick={handleMenuItemClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
