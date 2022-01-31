import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../../components/layout/Header";
import { companysList } from "../../public/constants/companylist";
import { creatorsList } from '../../public/constants/creatorlist';

//import styles from "../styles/Partners.module.css";

export default function Partners() {
    return (
        <div className=" text-mezo-white">
            {/* Header */}

            <Head>
                <title>Mezo Management | Partners</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
            </Head>
            {/* Header */}
            <Header />
            {/* Creators */}
            <h1>Partners</h1>
            <div>
                {creatorsList.map(({ name, description, link, image }) => (
                    <div key={name}>
                    <h1>{name}</h1>
            </div>
                ))}
            </div>
            {/* Companys */}
            {companysList.map(({ name, image, website, description }) => (
                <div key={name}>
                <Image alt={description}  src={image} width={400} height={400} />
                </div>
            ))}
        </div>
    );
}
