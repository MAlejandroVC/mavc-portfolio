import React from "react";

const Footer = () => {
  return (
    <footer className={`bg-bg-inverse`}>
      <div className={`max-w-screen-xl mx-auto p-4`}>
        <p className={`text-bg-secondary text-center`}>
          Thanks for stopping by :)
        </p>

        {/*Contact Buttons*/}
        <div className={`flex justify-center items-center mt-4 gap-x-16`}>
          <a href={`https://github.com/MAlejandroVC`} target={`_blank`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="var(--bg-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-github">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a href={`https://www.linkedin.com/in/mavc2000/`} target={`_blank`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="var(--bg-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href={`mailto:malejandrovillalobos255@gmail.com`} target={`_blank`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="var(--bg-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="/pdf/CV_AlejandroVillalobos_ENG.pdf" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="var(--bg-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-file-user">
              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
              <path d="M15 18a3 3 0 1 0-6 0"/>
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
              <circle cx="12" cy="13" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;