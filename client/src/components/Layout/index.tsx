import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Head from "next/head";
import Style from "./style.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="deadad" />
      </Head>
      <div className={Style.layout}>
        <Navbar />
        <main className="h-[95vh]">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default React.memo(Layout);
