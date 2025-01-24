// LinkButton.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
                                                 children,
                                                 className = '',
                                                 href,
                                                 ...props
                                               }) => {
  return (
    <Link
      href={href}
      className={`
        w-auto h-full flex justify-center items-center duration-500 px-6 py-4 transition-transform font-bold uppercase
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
