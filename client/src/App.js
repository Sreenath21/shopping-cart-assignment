import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import SignIn from "./containers/Auth/SignIn";
import Register from "./containers/Auth/Register";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Footer from "./components/Footer/Footer";

import { fetchBanners } from "./features/banner/bannerSlice";
import { fetchCategories } from "./features/categories/categoriesSlice";
import { fetchProducts } from "./features/products/productsSlice";

import "./App.css";

function App() {
  const banner = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBanners());
  // }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
