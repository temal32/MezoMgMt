import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/header";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" text-mezo-white">
      <Head>
        <title>Mezo Management</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Carousel */}
      <div className=" ">
        <div className="text-center text-2xl font-bold ">
          <h1 className="text-mezo-dark mb-3">
            It&lsquo;s not just any Management
          </h1>
          <span className="text-mezo-dark">It&lsquo;s</span>
          <span className=""> Mezo Management</span>
        </div>
      </div>
    </div>
  );
}
