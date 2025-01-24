// LinkButton.tsx
import React, { ReactNode, AnchorHTMLAttributes } from 'react';

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: React.FC<LinkButtonProps> = ({
                                                 children,
                                                 className = '',
                                                 href,
                                                 ...props
                                               }) => {
  return (
    <a
      href={href}
      className={`
        w-auto h-full flex justify-center items-center duration-500 px-6 py-4 transition-transform
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
