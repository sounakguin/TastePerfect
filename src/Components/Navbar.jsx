import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "/Images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ cartSize }) {
  const { loginWithRedirect } = useAuth0();


  return (
    <nav className="bg-white border-b-2 border-black text-black mx-auto flex justify-between items-center py-4">
      <Link to="/Home">
        <img className="h-14 ml-16" src={logo} alt="Website logo" />
      </Link>
      <ul className="flex space-x-10">
        <li className=" hover:text-blue-900">
          <Link to="/Home">Home</Link>
        </li>
        <li className=" hover:text-blue-900">
          <Link to="/Products">Products</Link>
        </li>
        <li className=" hover:text-blue-900">
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
      <div className="flex items-center mr-6   hover:text-red-600">
        <li>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
        <Link to="/BuyCart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{cartSize}</span>
        </Link>
      </div>
    </nav>
  );
}
