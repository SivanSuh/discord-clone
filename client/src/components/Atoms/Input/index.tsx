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
  name?: string;
  onChange?: (e: any) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  errors,
  required,
  value,
  onChange,
  name,
  register,
}) => {
  return (
    <input
      id={id}
      {...register(id, { required })}
      className={Style.input}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
