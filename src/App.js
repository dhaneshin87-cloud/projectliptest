// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import BestInPlump from "./components/BestInPlump";
import ProductsProven from "./components/ProductsProven";
import ProductShowcase from "./components/ProductShowcase";
import PlumpingKits from "./components/PlumpingKits";
import MadeForEveryone from "./components/MadeForEveryone";
import SocialMedia from "./components/SocialMedia";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
      <BestInPlump />
      <ProductsProven />
      <ProductShowcase />
      <PlumpingKits />
      <MadeForEveryone />
      <SocialMedia />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
