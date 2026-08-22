import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"; 
import Home from "./pages/Home/Home";
import ProductDetails  from "./pages/ProductDetails/ProductDetails";
import Category  from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Routes> 

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path="/" element={<Home />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Search By Category */}
        <Route path="/category/:style?" element={<Category />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

      </Routes>
    </div>
  );
};

export default App;