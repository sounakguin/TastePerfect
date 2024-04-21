import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import BuyCart from "./Components/BuyCart";
import OrderSuccessMessage from "./Components/OrderSuccessMessage";
import Footer from "./Components/Footer";

import Noproductsata from "./Components/Noproductsata";

export default function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  return (
    <BrowserRouter>
      <Navbar cartSize={cart.length} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Products"
          element={
            <Products
              cart={cart}
              setcart={setCart}
              warning={warning}
              setwarning={setWarning}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/BuyCart"
          element={<BuyCart cart={cart} setCart={setCart} />}
        />
        <Route path="/OrderSuccessMessage" element={<OrderSuccessMessage />} />

        {/* Update the route path for single product page with the product ID parameter */}
        <Route path="/Noproductsata/:id" element={<Noproductsata />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
