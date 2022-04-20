import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TitleLayout from "../components/title/TitleLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>INKR Test</title>
      </Head>
      <TitleLayout />
    </>
  );
};

export default Home;
