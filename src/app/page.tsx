"use client";
import { useEffect, useState } from "react";
import ImageSection from "@/feature/components/ImageSection";
import ImageSlider from "@/feature/components/ImageSlider";
import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import ProfileSection from "@/feature/components/ProfileSection";
import WorkSection from "@/feature/components/WorkSection";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menuOpenの状態を管理

  // lg以上の画面サイズではmenuOpenをfalseにする
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    // 初期ロード時に画面サイズを確認
    handleResize();

    // リサイズイベントを監視
    window.addEventListener("resize", handleResize);

    // クリーンアップでイベントリスナーを削除
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // メニューの開閉をトグル
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // スクロールトップ
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header に menuOpen と toggleMenu を渡す */}
      <Header menuOpen={menuOpen} />

      {/* その他のコンテンツ */}
      <MarqueeText />
      <section>
        <div className="flex items-center justify-center px-14 py-20">
          <ImageSlider />
        </div>
      </section>

      <WorkSection />
      <ProfileSection />
      <NewsSection />
      <LinkSection />
      <ImageSection />

      {/* スクロールトップボタン */}
      <div className="flex h-16 w-full border-t-2 border-black lg:hidden">
        <div className="w-full justify-between border-r-2 border-black"></div>
        <div className="flex w-24 items-center justify-center">
          <KeyboardArrowUpIcon
            className="size-10 cursor-pointer transition-all duration-300 hover:scale-125"
            onClick={scrollToTop}
          />
        </div>
      </div>

      {/* Footer に menuOpen と toggleMenu を渡す */}
      <Footer menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Home;
