import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import SignUp from "./pages/auth/SignUp";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Result from './pages/results/Result'
import Payment from "./pages/payments/Payment";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payment/> } />
          <Route path="category/:name" element={<Result/>} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
