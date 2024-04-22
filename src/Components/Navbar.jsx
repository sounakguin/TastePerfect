import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "/Images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ cartSize }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="bg-white border-b-2 border-black text-black mx-auto flex justify-between items-center py-4">
      <Link to="/">
        <img className="h-14 ml-16" src={logo} alt="Website logo" />
      </Link>
      <ul className="flex space-x-10">
        <li className=" hover:text-blue-900">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-blue-900">
          <Link to="/Products">Products</Link>
        </li>
        <li className=" hover:text-blue-900">
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
      {isAuthenticated && (user.name ? <p>{user.name}</p> : <p>{user.email}</p>)}

      {console.log(user)}
      <div className="flex items-center mr-6">
  {isAuthenticated ? (
    <li className="mr-10">
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        LogOut
      </button>
    </li>
  ) : (
    <li className="mr-10">
      <button onClick={() => loginWithRedirect()}>Login</button>
    </li>
  )}
  {/* Add a space */}
  <span className="mr-4"></span>
  <Link to="/BuyCart">
    <FontAwesomeIcon
      icon={faShoppingCart}
      className="hover:text-red-600"
    />
    <span>{cartSize}</span>
  </Link>
</div>

    </nav>
  );
}
