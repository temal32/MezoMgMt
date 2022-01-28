import Image from "next/image";
import { Fragment } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container text-mezo-white">
      {/* Header */}
      <header className="pt-5 text-mezo-white flex flex-row items-center justify-between">
        <div className="ml-6">
          <Image
            src="/images/Mezo Logo Resize.png"
            alt="Mezo Logo>"
            width={50}
            height={50}
          />
        </div>
        <div>
          <ul className="inline-flex space-x-5">
            <li>Home</li>
            <li>Partners</li>
            <li>Discord</li>
            <li>About</li>
          </ul>
        </div>
      </header>

      {/* Carousel */}
      <div className="m-40 p-10 ">
        <h2 className="text-center text-4xl font-bold ">
          <h1 className="text-mezo-dark mb-3">
            It&lsquo;s not just any Management
          </h1>
          <span className="text-mezo-dark">It&lsquo;s</span>
          <span className=""> Mezo Management</span>
        </h2>
      </div>
    </div>
  );
}
