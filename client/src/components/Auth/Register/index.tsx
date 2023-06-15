import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import { FieldValues, useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: any) => console.log("register", data);
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
        <Input
          register={register}
          id="KullanıcıAdı"
          placeholder="Kullanıcı Adı "
          type="text"
        />
        <Input
          register={register}
          id="Email"
          placeholder="Email giriniz"
          type="email"
        />
        <Input
          register={register}
          id="password"
          placeholder="Password"
          type="password"
        />
        <Input
          register={register}
          id="passwordVerification"
          placeholder="Password Doğrulayın"
          type="password"
        />
        <Button title="Gönder" />
      </form>
    </Layout>
  );
};

export default Register;
