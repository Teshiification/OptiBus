'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface LayoutLinkProps {
  children: React.ReactNode;
  key: any;
  href: string;
}

const LayoutLink = ({ children, key, href }: LayoutLinkProps) => {
  const currentRoute = usePathname();

  const pathDepth = href.split('/').length;

  return (
    <Link
      key={key}
      href={href}
      className={`min-w-40 whitespace-nowrap h-14 px-2 py-2 rounded font-semibold bg-black/10 hover:bg-black/5 align-middle 
      ${
        currentRoute.split('/').find((str) => {
          if (
            href.split('/').find((str2, ind) => {
              if (str === str2 && pathDepth - 1 === ind) return true;
            })
          )
            return true;
        }) && 'border-r-2 border-blue-500'
      }`}
    >
      {children}
    </Link>
  );
};

export default LayoutLink;
