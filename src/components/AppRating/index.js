import React from "react";
import Button from "../common/Button";
import "./appRating.css";

const getIosPrefix = () => {
  return (
    <img
      className="app-rating-icon"
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      alt=""
    />
  );
};
const getAndroidPrefix = () => {
  return (
    <img
      className="app-rating-icon"
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      alt=""
    />
  );
};
const AppRating = () => {
  return (
    <div className="app-rating max-width flex">
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              className="app-rating-stars"
              src="	https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              alt=""
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getIosPrefix()}
          />
        </div>
      </div>

      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              className="app-rating-stars"
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              alt=""
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getAndroidPrefix()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
