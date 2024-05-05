import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.page";
import Products from "./pages/products/Products.page";
import AddProduct from "./pages/add-product/AddProduct.page";
import EditProduct from "./pages/edit-product/EditProduct.page";
import DeleteProduct from "./pages/delete-product/DeleteProduct.page";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products/>}/>
            <Route path="add" element={<AddProduct/>}/>
            <Route path="edit/:id" element={<EditProduct/>}/>
            <Route path="delete/:id" element={<DeleteProduct/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
