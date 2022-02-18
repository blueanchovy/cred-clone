import React from "react";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
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
      <CredExperience />
    </>
  );
};

export default Homepage;
