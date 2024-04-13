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
import BlogCardPage from "./pages/BlogCardPage.js";
import CustomerPage from "./pages/ForCustomersPage";
import ScrollTop from "./hooks/ScrollTop";
import OfferPage from "./pages/PublicOffer";



import {
  // Switch,
  Route,
  // Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App bg-[#F6F2E7]">
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product1" element={<ProductPage />} />
          <Route path="/blog1" element={<BlogCardPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/forcustomer" element={<CustomerPage />} />
          <Route path="/publicoffer" element={<OfferPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
