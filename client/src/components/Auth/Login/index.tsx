import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";
import Button from "@/components/Atoms/Button";

const Login = () => {
  return (
    <Layout>
      <div className={Style.main}>
        <Input placeholder="Email giriniz" type="email" />
        <Input placeholder="Password" type="password" />
        <Button title="Gönder" />
      </div>
    </Layout>
  );
};

export default Login;
