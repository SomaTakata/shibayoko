"use client"; // クライアントサイドで動く部分

import { useEffect, useState } from "react";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("re", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full">
      <Header menuOpen={menuOpen} />
      {children}
      <div className="flex h-16 w-full border-t-2 border-black lg:hidden">
        <div className="w-full justify-between border-r-2 border-black"></div>
        <div className="flex w-24 items-center justify-center">
          <MdOutlineKeyboardArrowUp
            className="h-10 w-10 cursor-pointer transition-all duration-300 hover:scale-125"
            onClick={scrollToTop}
          />
        </div>
      </div>
      <Footer menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
