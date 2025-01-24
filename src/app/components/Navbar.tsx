import React from 'react';
import LinkButton from './LinkButton';
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 border-4">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/logos/MAVC_white.png"
            alt="Alejandro Villalobos Logo"
            width={607}
            height={161}
            className="h-20
            w-auto cursor-pointer
            hidden lg:block"
          />
          <Image
            src="/logos/MAVC_mini.png"
            alt="Alejandro Villalobos Mini Logo"
            width={161}
            height={161}
            className="h-20
            w-auto cursor-pointer
            block lg:hidden"
          />
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="h-12 hidden md:flex">
        <LinkButton
          className={`
            text-text-inverse hover:text-text-primary
            bg-bg-inverse hover:bg-bg-primary
            border-4 border-solid border-bg-inverse
            rounded-full
            `}
          href="/about"
        >
          About Me
        </LinkButton>
        <LinkButton
          className={`
            text-text-inverse hover:text-text-primary
            bg-bg-inverse hover:bg-bg-primary
            border-4 border-solid border-bg-inverse
            rounded-full
            `}
          href="/ai-ml"
        >
          AI & ML
        </LinkButton>
        <LinkButton
          className={`
            text-text-inverse hover:text-text-primary
            bg-bg-inverse hover:bg-bg-primary
            border-4 border-solid border-bg-inverse
            rounded-full
            `}
          href="/algorithms"
        >
          Algorithms
        </LinkButton>
      </div>

      {/* Extra Buttons */}
      <div className="flex h-12">
        <ThemeToggle/>
        <LinkButton
          className={`
            text-text-inverse hover:text-text-primary
            bg-bg-inverse hover:bg-bg-primary
            border-4 border-solid border-bg-inverse
            rounded-full hover:rounded-none
            `}
          href="/pdf/CV_AlejandroVillalobos_ENG.pdf"
        >
          Download my CV
        </LinkButton>
      </div>
    </nav>
  );
};

export default Navbar;
