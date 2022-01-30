import Image from "next/image";
import { Fragment } from "react";
import { companys } from "../public/constants/companylist";
import { creators } from '../public/constants/creatorlist';


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

       {/* creators */}
       <h1>Partners</h1>
      <div>
      {creators.map(({name}) => (
        <div key={creators}>
       <h1>{name}</h1>
       </div>
      ))}
        </div>
         {companys.map(({name, image, website, description}) => (
           <div key={companys}>
           <Image src={image} width={512} height={512} alt=""/>
           </div>
         ))}

    </div>

  )
}
