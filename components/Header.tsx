"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
  
];
export const Header = () => {
  const pathname = usePathname();
  
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
     <Link href={"/"}> <h1 className='text-blue-200 text-xl font-bold'>Blogify</h1></Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-blue-200" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
      
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
