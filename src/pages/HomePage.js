import React from "react";
import BrandsLove from "../components/BrandsLove";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
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
      <BrandsLove />
      <CredExperience />
      <CredSecurity />
    </>
  );
};

export default Homepage;
