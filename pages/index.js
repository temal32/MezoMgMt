import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mx-auto text-mezo-white">
      <Head>
        <title>Mezo Management | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Carousel */}
      <div className="mx-auto p-4 my-8 sm:my-12 md:my-14 xl:my-24 2xl:my-32">
        <div className="text-center text-2xl xl:text-3xl 2xl:text-6xl font-bold ">
          <h1 className="text-mezo-dark mb-3">
            It&lsquo;s not just any Management
          </h1>
          <span className=" text-mezo-dark ">It&lsquo;s</span> Mezo
          <div className="sm:inline"> Management</div>
        </div>
      </div>

      {/* Info Section */}
      <div className=" mx-auto px-4 sm:px-8 space-y-2 grid sm:grid-cols-2 lg:grid-cols-7 justify-items-center items-center">
        <div className="text-black text-center sm:text-left 2xl:text-4xl lg:col-start-2 lg:col-span-3 xl:lg:col-start-1 xl:col-span-4 xl:mx-8">
          <h1 className="font-bold mb-2">Info.</h1>
          <span className="font-normal ">
            Here at Mezo Management, we&lsquo;ve created a platform that links
            content creators and companies. We are a company that uses the power
            of social media to provide creators for you and your company. We
            worked with a variety of creators in the past, providing them great
            deals with our partnered company Salad Technologies.
          </span>
        </div>
        <div className="relative w-44 h-44 2xl:w-80 2xl:h-80 lg:col-start-6  lg:col-span-1  xl:col-start-6  xl:col-span-2 xl:mx-8">
          <Image
            src="/images/inky-discussion-1.png"
            alt="Information about our Organization>"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
