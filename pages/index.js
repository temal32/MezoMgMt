import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container mx-auto text-mezo-white">
      <Head>
        <title>Mezo Management | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Carousel */}
      <div className="mx-auto p-4 mt-8 sm:mt-10 md:mt-12 xl:mt-16 2xl:mt-20">
        <div className="text-center text-2xl xl:text-3xl 2xl:text-6xl font-bold ">
          <h1 className="text-mezo-dark mb-3">
            It&lsquo;s not just any Management
          </h1>
          <span className=" text-mezo-dark ">It&lsquo;s</span> Mezo
          <div className="sm:inline"> Management</div>
        </div>
      </div>
    </div>
  );
}
