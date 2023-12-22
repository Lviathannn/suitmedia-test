import { XIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
};

export default function MobileNavbar({ isOpen, setOpen, pathname }: Props) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/40 backdrop-blur-sm">
      <aside
        className={`p-10 bg-primary h-full absolute right-0 ${
          isOpen ? "w-[75%]" : "w-0"
        }`}
      >
        <button
          className="absolute right-2 top-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          <XIcon className=" text-white " />
        </button>
        <ul className="flex flex-col gap-5 text-white">
          <Link
            href="/"
            className={`flex items-center ${
              pathname === "/" ? "after:w-10" : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`flex items-center ${
              pathname === "/work" ? "after:w-10" : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`flex items-center ${
              pathname === "/about"
                ? "after:w-10"
                : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`flex items-center ${
              pathname === "/services"
                ? "after:w-10"
                : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Services
          </Link>
          <Link
            href="/ideas"
            className={`flex items-center ${
              pathname === "/ideas"
                ? "after:w-10"
                : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Ideas
          </Link>
          <Link
            href="/careers"
            className={`flex items-center ${
              pathname === "/careers"
                ? "after:w-10"
                : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={`flex items-center ${
              pathname === "/contact"
                ? "after:w-10"
                : "after:w-0 hover:after:w-10"
            } relative after:absolute after:-bottom-1 after:h-[3px] after:bg-white after:transition-all after:duration-300 `}
          >
            Contact
          </Link>
        </ul>
      </aside>
    </div>
  );
}
