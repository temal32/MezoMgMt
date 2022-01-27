import Image from "next/image";
import { Fragment } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="pt-5 text-white px-8 flex flex-row justify-between">
        <div className="logo">
          <img
            className="w-10 h-10"
            layout="fill"
            src="/images/Mezo Logo Resize.png"
            alt="Logo Image"
          />
        </div>
        <div>
          <ul className="inline-flex space-x-2">
            <li>Home</li>
            <li>Partners</li>
            <li>Discord</li>
            <li>About</li>
          </ul>
        </div>
      </header>

      <div>
        <h2 class="text-center">
          It's not just any Management
          <br />
          It's <span>Mezo Management</span>
        </h2>
      </div>
    </div>
  );
}
