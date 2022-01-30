import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className="m-2 text-mezo-white flex justify-between items-center">
      <Image
        src="/images/mezo-logo-resize.png"
        alt="Mezo Logo>"
        width={50}
        height={50}
      />
      <nav className="inline-flex space-x-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/partners">
          <a>Partners</a>
        </Link>
        <Link href="/discord">
          <a>Discord</a>
        </Link>
        <Link href="/about">
          <a> About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
