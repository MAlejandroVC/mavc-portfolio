import React from 'react';
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-bg-inverse">
      <nav className="max-w-screen-xl mx-auto flex p-4 justify-between items-center border-x border-border-default">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logos/MAVC_white.png"
              alt="Alejandro Villalobos Logo"
              width={590}
              height={161}
              className="max-h-20
            w-auto cursor-pointer
            hidden lg:block"
            />
            <Image
              src="/logos/MAVC_mini.png"
              alt="Alejandro Villalobos Mini Logo"
              width={161}
              height={161}
              className="max-h-20
            w-auto cursor-pointer
            block lg:hidden"
            />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="h-12 hidden xl:flex">
          <Link
            className={`
            text-text-primary hover:text-text-inverse
            bg-bg-primary hover:bg-bg-inverse
            border-2 border-solid border-bg-primary
            rounded-full font-bold uppercase
            w-auto h-full flex justify-center items-center px-6 py-4
            duration-500 transition-transform
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
            w-auto h-full flex justify-center items-center px-6 py-4
            duration-500 transition-transform
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
            w-auto h-full flex justify-center items-center px-6 py-4
            duration-500 transition-transform
            `}
            href="/algorithms-page"
          >
            Algorithms
          </Link>
        </div>

        {/* Extra Buttons */}
        <div className="flex h-12">
          <ThemeToggle/>
          <a
            className={`
            text-text-primary hover:text-text-inverse
            bg-accent-orange hover:bg-accent-orange-vibrant
            border-2 border-solid border-accent-orange
            rounded-full font-bold uppercase
            w-full h-full flex justify-center items-center px-6 py-4
            duration-500 transition-transform
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
