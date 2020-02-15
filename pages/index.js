import React from "react";
import Head from "next/head";
import { Grommet } from "grommet";
import { Header } from "../components/Header";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    <Grommet full>
      <Header />
    </Grommet>
  </>
);

export default Home;
