import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoginPage from "./auth/login";
import MainTemplate from "@/components/Main";
import ChatContent from "@/components/ChatContent";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoggin, formContent, allUser } = useSelector(
    (state: RootState) => state.user
  );

  const [select, setSelect] = useState({
    id: "",
    name: "",
    image: "",
  });
  return (
    <>
      {isLoggin ? (
        <Layout>
          <div className="flex h-full">
            <MainTemplate
              formContent={formContent}
              allUser={allUser}
              setSelect={setSelect}
            />
            <ChatContent select={select} />
          </div>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
