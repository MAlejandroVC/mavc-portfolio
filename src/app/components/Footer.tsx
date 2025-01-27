import React from "react";

const Footer = () => {
  return (
    <footer className="border-solid w-full">
      <div>
        <a
          className={`
            text-text-primary
            bg-accent-cyan
            rounded-full hover:rounded-none 
            font-bold uppercase
            w-auto h-full flex justify-center items-center px-6 py-4
            duration-500 transition-transform
            `}
          href="mailto:malejandrovc255@gmail.com"
        >
          Send me an email
        </a>
      </div>
    </footer>
  );
};

export default Footer;