import { Fragment } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="pt-5 text-white px-8 flex flex-row items-center justify-between">
        <div className="logo">Mezo Management</div>
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
      <div className="mt-8 ">
        <h2 className="text-center fontsize text-3xl font-semibold text-black-600">
          It&lsquo;s not just any Management
          <br />
          It&lsquo;s <span className="text-white">Mezo Management</span>
        </h2>
      </div>
    </div>
  );
}
