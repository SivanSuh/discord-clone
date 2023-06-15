import React from "react";
import Style from "./style.module.css";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  type: "text" | "email" | "password";
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  errors,
  required,
  register,
}) => {
  return (
    <input
      id={id}
      {...register(id, { required })}
      className={Style.input}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
