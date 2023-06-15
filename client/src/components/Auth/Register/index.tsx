import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import Layout from "@/components/Layout";
import Style from "./style.module.css";

const Register = () => {
  return (
    <Layout>
      <div className={Style.main}>
        <Input placeholder="Kullanıcı Adı " type="text" />
        <Input placeholder="Email giriniz" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Password Doğrulayın" type="password" />
        <Button title="Gönder" />
      </div>
    </Layout>
  );
};

export default Register;
