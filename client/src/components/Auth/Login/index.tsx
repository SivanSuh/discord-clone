import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import Button from "@/components/Atoms/Button";
import { FieldValues, useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: any) => console.log("data", data);
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
        <Input
          id="email"
          register={register}
          placeholder="Email giriniz"
          type="email"
        />
        <Input
          id="password"
          register={register}
          placeholder="Password"
          type="password"
        />
        <Button title="Gönder" />
      </form>
    </Layout>
  );
};

export default Login;
