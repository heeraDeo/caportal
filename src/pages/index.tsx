import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/blog";
import Home from "../components/home";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import CapitalGain from "../pages/CapitalGain"
import AssistedService from "../pages/assistedService"
import Support from "../pages/support"
import Login from "./login";
import NewUser from "./newUser";
import TaxFiler from "./TaxFiler";
import RescueFAT from "./RescueFAT";
import RFAT from "./RFAT"
import RFAT2 from "./RFAT2";
import RFAT3 from "./RFAT3";
import Newtable from "./newtable";
const App: NextPage = () => {
  return(
    <div>
 {/* <RzescueFAT/>  */}
 <RFAT/>
 <RFAT2/>
 <RFAT3/>
 {/* <Newtable/> */}
 </div>
  )
  return (
    <Layout>
      {/* <Home /> */}
{/* <CapitalGain/> */}
{/* <AssistedService/> */}
{/* <Support/> */}
{/* <Login/> */}
{/* <NewUser/> */}
{/* <TaxFiler/> */}

{/*  */}
    </Layout>
  );
};

export default App;
