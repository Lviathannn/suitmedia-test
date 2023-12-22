"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 bg-primary px-container w-full flex justify-between items-center py-3">
      <Link href="/" className="">
        <Image
          src="/nav-logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>
      <ul className="flex gap-5 text-white">
        <Link
          href="/work"
          className={`flex items-center ${
            pathname === "/work"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={`flex items-center ${
            pathname === "/about"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`flex items-center ${
            pathname === "/services"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          Services
        </Link>
        <Link
          href="/ideas"
          className={`flex items-center ${
            pathname === "/ideas"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          Ideas
        </Link>
        <Link
          href="/careers"
          className={`flex items-center ${
            pathname === "/careers"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          Careers
        </Link>
        <Link
          href="/contact"
          className={`flex items-center ${
            pathname === "/contact"
              ? "after:w-full"
              : "after:w-0 hover:after:w-full"
          } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
