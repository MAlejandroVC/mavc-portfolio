import React from 'react';
import LinkButton from './LinkButton';
import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-dark text-light-base flex items-center justify-between p-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <img
            src="/logos/MAVC_white.png"
            alt="Alejandro Villalobos Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="flex">
        <ThemeToggle/>
        <LinkButton
          className={'bg-bg-inverse text-text-inverse hover:bg-bg-primary hover:text-text-primary'}
          href="/about"
        >
          About
        </LinkButton>
        <LinkButton
          className={'bg-bg-inverse text-text-inverse hover:bg-bg-primary hover:text-text-primary'}
          href="/ai-ml"
        >
          AI/ML
        </LinkButton>
        <LinkButton
          className={'bg-bg-inverse text-text-inverse hover:bg-bg-primary hover:text-text-primary'}
          href="/algorithms"
        >
          Algorithms
        </LinkButton>

        {/* Download Button */}
        <LinkButton
          className={'bg-accent-magenta text-text-inverse hover:bg-accent-magenta-vibrant'}
          href="/pdf/CV_AlejandroVillalobos_ENG.pdf"
          retainShapeOnHover={false}
        >
          Download my CV
        </LinkButton>
      </div>
    </nav>
  );
};

export default Navbar;
