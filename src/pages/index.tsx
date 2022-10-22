import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/blog/blog";
import Home from "../components/home";
import ContactUs from "../components/contactus";
import Page from "../components/page";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const App: NextPage = () => {
  // return(
  //   // <Layout>
  //   <_Projectdetails/>
  //   // </Layout>
  // )
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
