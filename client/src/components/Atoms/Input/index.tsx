import React from "react";
import Style from "./style.module.css";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  type: "text" | "email" | "password" | "file";
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors | undefined | any;
  required?: boolean;
  name?: string;
  onChange?: (e: any) => void;
  value?: string;
  className?: string;
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
      className={`${errors?.[id] ? Style.required : Style.input}`}
      id={id}
      {...register(id, { required })}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
