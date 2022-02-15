import React from "react";
import "./button.css";

const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customClass}`}>
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
