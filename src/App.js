import React from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import "./App.css";
import Indidual_Product from "./components/Indidual_Product";
import Rufe from "./components/Rufe";
import AddToCart from "./components/AddToCart";
import CategoryComponent from "./components/CategoryComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <CategoryComponent/> */}

      <Routes>
        <Route path="/" element={<MainBody />}/>
        <Route path="/product/:id" element={<Indidual_Product/>}/>
      </Routes>
      {/* <Indidual_Product/> */}
      {/* <Rufe/> */}
      {/* <AddToCart/> */}
    </BrowserRouter>
  );
}
