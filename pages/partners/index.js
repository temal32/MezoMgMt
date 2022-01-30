import Head from "next/head";
import Image from "next/image";
import Header from "../../components/layout/Header";

const creatorList = [
    {
        name: "Cluwey",
        description:
            "My name is Cluwey, I'm 17 years old. I do discord trolling videos on YouTube. I try to entertain people and make them happy with my videos.",
        link: "https://bit.ly/cluweymgmt",
        image: "",
    },
    {
        name: "FrenchyFry3",
        description:
            "My name is Cluwey, I'm 17 years old. I do discord trolling videos on YouTube. I try to entertain people and make them happy with my videos.",
        link: "https://bit.ly/cluweymgmt",
        image: "",
    },
];

const companyList = [
    {
        name: "Salad",
        description:
            "Salad makes it easy for anyone to make money in their sleep. They use crypto currency mining to turn idle time into real money. If you want more info about salad make sure to click the link down below.",
        website: "https://bit.ly/saladmezo",
        image:
            "https://cdn.discordapp.com/attachments/697180189729226814/734781267509248111/favicon.512x512.png",
    },
];
//import styles from "../styles/Partners.module.css";

export default function Partners() {
    return (
        <div className=" text-mezo-white">
            {/* Header */}

            <Head>
                <title>Mezo Partenrs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/images/mezo-logo-resize.png" />
            </Head>
            {/* Header */}
            <Header />
            {/* creators */}
            <h1>Partners</h1>
            <div>
                {creatorList.map(({ name }) => (
                    <h1 key={name} >{name}</h1>
                ))}
            </div>
            {companyList.map(({ name, image, website, description }) => (
                <Image alt={description} key={name} src={image} width={400} height={400} />
            ))}
        </div>
    );
}
