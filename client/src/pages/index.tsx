import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoginPage from "./auth/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoggin } = useSelector((state: RootState) => state.user);

  return <>{isLoggin ? <Layout>merhabba</Layout> : <LoginPage />}</>;
}
