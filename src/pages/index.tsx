import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/blog";
import Home from "../components/home";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const App: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
