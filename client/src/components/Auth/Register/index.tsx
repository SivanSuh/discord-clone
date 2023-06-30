import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import { FieldValues, useForm } from "react-hook-form";
import { AppDispatch } from "@/store";
import { registerAuth } from "@/store/auth/authSlice";
import { useRouter } from "next/router";

const Register = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const dispatch = AppDispatch();

  const router = useRouter();
  const onSubmit = async (data: any) => {
    await dispatch(registerAuth(data));
    router.push("/auth/login");
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
        <Input
          register={register}
          id="userName"
          placeholder="Kullanıcı Adı "
          type="text"
          name="userName"
        />
        <Input
          register={register}
          id="email"
          placeholder="Email giriniz"
          type="email"
          name="email"
        />
        <Input
          register={register}
          id="img"
          placeholder="Resim"
          type="text"
          name="img"
        />
        <Input
          register={register}
          id="password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <Input
          register={register}
          id="confirmPassword"
          placeholder="Password Doğrulayın"
          type="password"
          name="confirmPassword"
        />
        <Button title="Gönder" />
      </form>
    </Layout>
  );
};

export default Register;
