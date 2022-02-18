import React from "react";
import BrandsLove from "../components/BrandsLove";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import ProductShowCase from "../components/ProductShowcase";
import WindowPeek from "../components/WindowPeek";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <div className="non-mobile">
        <WindowPeek />
      </div>

      <CredSecurity />
    </>
  );
};

export default Homepage;
