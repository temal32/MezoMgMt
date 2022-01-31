import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="sm:mx-10 text-mezo-white">
      <Head>
        <title>Mezo Management | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Carousel */}
      <div className="mx-auto p-4 my-8 sm:my-16 md:my-20 xl:my-40 2xl:my-72">
        <div className="text-center text-2xl xl:text-3xl 2xl:text-6xl font-bold ">
          <h1 className="text-mezo-dark mb-3">
            It&lsquo;s not just any Management
          </h1>
          <span className=" text-mezo-dark ">It&lsquo;s</span> Mezo
          <div className="sm:inline"> Management</div>
        </div>
      </div>
      {/* Info Section */}
      <h1 className="text-2xl text-center sm:text-3xl 2xl:text-4xl text-black font-bold">
        Info.
      </h1>
      <div className="mt-6 sm:mt-8 2xl:mt-4 mx-auto px-4 sm:px-8 space-y-2 grid sm:grid-cols-2 lg:grid-cols-7 justify-items-center items-center">
        <div className="text-black text-center sm:text-left 2xl:text-3xl lg:col-start-2 lg:col-span-3 xl:lg:col-start-1 xl:col-span-4 xl:mx-8">
          <div className=" space-y-2 px-2 sm:px-0">
            <h1 className="font-normal  2xl:text-2xl">
              Here at Mezo Management, we&lsquo;ve created a platform that links
              content creators and companies. We are a company that uses the
              power of social media to provide creators for you and your
              company.
            </h1>
            <h1 className="font-normal mt-4 2xl:text-2xl">
              We worked with a variety of creators in the past, providing them
              great deals with our partnered company Salad Technologies.
            </h1>
          </div>
        </div>
        <div className="relative w-44 h-44 2xl:w-80 2xl:h-80  lg:col-start-6  lg:col-span-1  xl:col-start-6  xl:col-span-2 xl:mx-8">
          <Image
            src="/images/inky-discussion-1.png"
            alt="Information about our Organization>"
            layout="fill"
          />
        </div>
      </div>
      {/* Faq */}
      <div className="mx-auto my-5 sm:my-10">
        <h2 className="sm:text-2xl text-black font-bold text-center mt-8 sm:mt-24 mb-2 sm:mb-8 ">
          FAQ&lsquo;s
        </h2>
        <div className="px-5 sm:px-0 max-w-sm xl:max-w-xl 2xl:max-w-2xl mx-auto space-y-2 ">
          <details className="">
            <summary className="text-black 2xl:text-2xl font-bold">
              What is Mezo Management &#63;
            </summary>
            <p className="p-2 2xl:text-2xl text-black">
              At Mezo Management, we bridge the gap between brands and content
              creators and help brands and creators alike find quality
              partnerships.
            </p>
          </details>
          <details className="">
            <summary className="text-black 2xl:text-2xl font-bold">
              Why Mezo Management &#63;
            </summary>
            <p className="p-2 2xl:text-2xl text-black">
              At Mezo Management we only partner with creators and
              company&lsquo;s that we ourselves have verified and are 100%
              legitimate. We always deliver quality over quantity. We only
              promote products with creators we believe in as a brand.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
