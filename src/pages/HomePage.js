import React from "react";
import BrandsLove from "../components/BrandsLove";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
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
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>

      <CredSecurity />
      <CredStory />
    </>
  );
};

export default Homepage;
