import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import SignUp from "./pages/auth/SignUp";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import ProductDetail from "./pages/productDetail/ProductDetail";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
