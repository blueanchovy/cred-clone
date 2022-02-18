import React from "react";
import Header from "../components/common/Header";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import ProductShowCase from "../components/ProductShowcase";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
    </>
  );
};

export default Homepage;
