import React from "react";
import Style from "./style.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: "text" | "email" | "password";
}

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input className={Style.input} placeholder={placeholder} type={type} />
  );
};

export default Input;
