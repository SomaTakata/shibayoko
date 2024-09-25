"use client";
import { useEffect, useState } from "react";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import WorkPage from "@/feature/components/WorkPage";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

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
    <div className="flex flex-col ">
      <Header menuOpen={menuOpen} />
      <WorkPage />
      <div className="flex h-16 w-full border-t-2 border-black lg:hidden">
        <div className="w-full justify-between border-r-2 border-black"></div>
        <div className="flex w-24 items-center justify-center">
          <KeyboardArrowUpIcon
            className="size-10 cursor-pointer transition-all duration-300 hover:scale-125"
            onClick={scrollToTop}
          />
        </div>
      </div>
      <Footer menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Home;
