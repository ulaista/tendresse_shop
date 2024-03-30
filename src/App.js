import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import DeliveryPage from "./pages/DeliveryPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";


import {
  // Switch,
  Route,
  // Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App bg-orange-50">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-as" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product1" element={<ProductPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
