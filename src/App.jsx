import React from "react";
import { CartListt } from "./Redux-Toolkit/CartList";
import { Cartt } from "./Redux-Toolkit/Cart";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <Link className="nav-link" to={"/products"}>Products</Link>
          <Link className="nav-link"  to={"/cart"}>Cart</Link>
        </nav>
        <Routes>
          <Route path="/products" element={<Cartt />} />
          <Route path="/cart" element={<CartListt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
