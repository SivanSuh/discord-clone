import React from "react";
import Style from "./style.module.css";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className={Style.button}>{title}</button>;
};

export default Button;
