import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../../components/layout/Header";
const About = () => {
  return (
    <div className="sm:mx-10 text-mezo-white">
      {/* Page Description for SEO */}
      <Head>
        <title>Mezo Management | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
};

export default About;
