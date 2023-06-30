import React from "react";
import Style from "./style.module.css";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ title, type = "submit" }) => {
  return (
    <button type={type} className={Style.button} style={{ cursor: "pointer" }}>
      {title}
    </button>
  );
};

export default Button;
