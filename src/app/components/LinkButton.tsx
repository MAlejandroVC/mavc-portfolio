// LinkButton.tsx
import React, { ReactNode, AnchorHTMLAttributes } from 'react';

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  retainShapeOnHover?: boolean;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: React.FC<LinkButtonProps> = ({
                                                 children,
                                                 className = '',
                                                 retainShapeOnHover = true,
                                                 href,
                                                 ...props
                                               }) => {
  return (
    <a
      href={href}
      className={`
        w-full h-full flex justify-center items-center transition-colors duration-300
        rounded-lg ${!retainShapeOnHover ? 'hover:rounded-none' : ''} ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
