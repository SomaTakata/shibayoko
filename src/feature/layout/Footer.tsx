import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

type FooterProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const Footer = ({ menuOpen, toggleMenu }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-between border-t-2 border-black bg-white lg:relative lg:h-[100px] lg:border-t-[3px]">
      {/* Desktop Navigation */}
      <div className="hidden h-[100px] w-full items-center gap-12 border-r-[3px] border-black px-10 py-5 lg:flex lg:py-10">
        <nav className="flex items-center gap-12 font-bold">
          <Link href="/works" className="font-roboto">
            WORK
          </Link>
          <Link href="/profile" className="font-roboto">
            PROFILE
          </Link>
          <Link href="/news" className="font-roboto">
            NEWS
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/SomaTakata" aria-label="GitHub">
            <IoLogoGithub className="h-7 w-7" />
          </Link>
          <Link href="https://twitter.com/soma_takata" aria-label="Twitter">
            <FaXTwitter className="h-7 w-7" />
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="hidden lg:flex">
        <div className="flex h-[100px] items-center justify-center gap-4 border-r-[3px] border-black px-8"></div>
        <div className="w-24 flex items-center justify-center">
          <MdOutlineKeyboardArrowUp
            className="h-10 w-10 cursor-pointer transition-all duration-300 hover:scale-125"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative flex w-full h-16 lg:hidden">
        <div className="w-1/2 border-r-2 border-black flex items-center justify-center"></div>
        <div
          className={`relative z-10 flex w-1/2 items-center justify-center gap-3 cursor-pointer duration-300 bg-transparent`}
          onClick={toggleMenu}
        >
          <span className="relative z-50 flex items-center gap-3">
            {menuOpen ? (
              <>
                <IoMdClose className="h-7 w-7 text-white" />
                <p className="font-roboto text-lg font-bold text-white">
                  CLOSE
                </p>
              </>
            ) : (
              <>
                <IoMdMenu className="h-7 w-7 text-black" />
                <p className="font-roboto text-lg font-bold text-black">MENU</p>
              </>
            )}
          </span>

          {/* Background Animation */}
          <div
            className={`absolute inset-0 -z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-300 ${
              menuOpen ? "before:translate-y-0" : "before:-translate-y-full"
            }`}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
