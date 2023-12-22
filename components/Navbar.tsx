"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLogo from "@/public/nav-logo.png";
import { AlignLeft } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setisOpen(false);
  }, [pathname]);
  return (
    <nav className="fixed top-0 bg-primary px-container w-full flex justify-between items-center py-3 z-50">
      <Link href="/" className="">
        <Image src={navLogo} alt="Logo" className="object-contain w-28" />
      </Link>
      <ul className="md:flex gap-5 text-white hidden">
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
      <div className="md:hidden">
        <button
          className="text-white"
          onClick={() => {
            setisOpen(true);
          }}
        >
          <AlignLeft />
        </button>
        {isOpen && (
          <MobileNavbar
            isOpen={isOpen}
            setOpen={setisOpen}
            pathname={pathname}
          />
        )}
      </div>
    </nav>
  );
}
