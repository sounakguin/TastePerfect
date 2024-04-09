import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/Logo.png";

export default function Navbar({ cartSize }) {
  return (
    <nav className="bg-white text-black mx-auto flex justify-between items-center py-4">
      <Link to="/">
        <img className="h-14 ml-16" src={logo} alt="Website logo" />
      </Link>
      <ul className="flex space-x-10">
        <li className=" hover:text-blue-900">
          <Link to="/Home">Home</Link>
        </li>
        <li  className=" hover:text-blue-900">
          <Link to="/Products">Products</Link>
        </li>
        <li  className=" hover:text-blue-900">
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
      <div className="items-center mr-6   hover:text-red-600">
        <Link to="/BuyCart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{cartSize}</span>
        </Link>
      </div>
    </nav>
  );
}
