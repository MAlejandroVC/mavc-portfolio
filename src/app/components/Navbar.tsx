import React from 'react';
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-bg-inverse">
      <nav className="max-w-screen-xl mx-auto flex p-4 justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={"/logos/DuckyLogo.png"} alt={"Rubber Duck Logo"} height={50} width={83}/>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden lg:flex gap-x-4">
          <Link
            className={`
            text-text-primary hover:text-text-inverse
            bg-bg-primary hover:bg-bg-inverse
            border-2 border-solid border-bg-primary
            rounded-full font-bold uppercase
            w-auto h-full flex justify-center items-center px-6 py-2
            duration-200
            `}
            href="/about-page"
          >
            About Me
          </Link>
          <Link
            className={`
            text-text-primary hover:text-text-inverse
            bg-bg-primary hover:bg-bg-inverse
            border-2 border-solid border-bg-primary
            rounded-full font-bold uppercase
            w-auto h-full flex justify-center items-center px-6 py-2
            duration-200
            `}
            href="/ai-ml-page"
          >
            AI & ML
          </Link>
          <Link
            className={`
            text-text-primary hover:text-text-inverse
            bg-bg-primary hover:bg-bg-inverse
            border-2 border-solid border-bg-primary
            rounded-full font-bold uppercase
            w-auto h-full flex justify-center items-center px-6 py-2
            duration-200
            `}
            href="/algorithms-page"
          >
            Algorithms
          </Link>
        </div>

        {/* Extra Buttons */}
        <div className="flex">
          <ThemeToggle/>
          <a
            className={`
            text-text-primary hover:text-text-inverse
            bg-accent-orange hover:bg-accent-orange-vibrant
            border-2 border-solid border-accent-orange
            rounded-full font-bold uppercase
            w-full h-full flex justify-center items-center px-6 py-2
            duration-200
            `}
            href="/pdf/CV_AlejandroVillalobos_ENG.pdf"
            download
          >
            Download my CV
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
