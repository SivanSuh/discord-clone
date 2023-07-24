import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import Button from "@/components/Atoms/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store";
import { loginAuth } from "@/store/auth/authSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  //const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const dispatch = AppDispatch();

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("login data", data);
    await dispatch(loginAuth(data));
    router.push("/");
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
          errors={errors}
          required
          // onChange={changeHandler}
        />
        <Input
          id="password"
          register={register}
          placeholder="Password"
          type="password"
          // value={values.password}
          name="password"
          errors={errors}
          required
          // onChange={changeHandler}
        />
        <Button type="submit" title="Gönder" />
      </form>
    </Layout>
  );
};

export default Login;
