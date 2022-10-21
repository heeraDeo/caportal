import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/blog";
import Home from "../components/home";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import _Projectdetails from '../components/_projectdetails'

const App: NextPage = () => {
  return(
    // <Layout>
    <_Projectdetails/>
    // </Layout>
  )
  return (
    <Layout>
      {/* <Home /> */}
    </Layout>
  );
};

export default App;
