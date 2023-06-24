import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import Button from "@/components/Atoms/Button";
import { FieldValues, useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store";
import { loginAuth } from "@/store/auth/authSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const user = useSelector((state: RootState) => state.user);

  const dispatch = AppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data: any) => {
    console.log("eeeeee", data);
    await dispatch(loginAuth(values));
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
        <Input
          id="email"
          register={register}
          placeholder="Email giriniz"
          type="email"
          // value={values.email}
          name="email"
          // onChange={changeHandler}
        />
        <Input
          id="password"
          register={register}
          placeholder="Password"
          type="password"
          // value={values.password}
          name="password"
          // onChange={changeHandler}
        />
        <Button type="submit" title="Gönder" />
      </form>
    </Layout>
  );
};

export default Login;
