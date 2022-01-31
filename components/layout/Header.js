import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className="m-2 md:m-4 2xl:mt-6 text-mezo-white  flex justify-between items-center">
      <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
        <Image
          src="/images/mezo-logo-resize.png"
          alt="Mezo Logo>"
          layout="fill"
        />
      </div>

      <nav className="inline-flex space-x-2 2xl:space-x-4 xl:text-xl 2xl:text-3xl">
        <Link href="/">
          <a className="hover:text-black hover:bg-gray-100 sm:px-3 sm:py-2 sm:rounded-md  font-medium">
            Home
          </a>
        </Link>
        <Link href="/partners">
          <a className="hover:text-black hover:bg-gray-100 sm:px-3 sm:py-2 sm:rounded-md  font-medium">
            Partners
          </a>
        </Link>
        <Link href="/discord">
          <a className="hover:text-black hover:bg-gray-100 sm:px-3 sm:py-2 sm:rounded-md  font-medium">
            Discord
          </a>
        </Link>
        <Link href="/about">
          <a className="hover:text-black hover:bg-gray-100 sm:px-3 sm:py-2 sm:rounded-md  font-medium">
            About
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
