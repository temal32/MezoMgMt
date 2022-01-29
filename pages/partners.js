import Image from "next/image";
import { Fragment } from "react";
import { partners } from '../public/constants/partnerlist';


//import styles from "../styles/Partners.module.css";

export default function Partners() {
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
          <li>Discord</li>
          <li>About</li>
        </ul>
      </div>
    </header>

       {/* Partners */}
      <div>
      {partners.map(({name}) => (
        <h1>{name}</h1>
      ))}
        </div>

    </div>

  )
}
