import Link from "next/link";
import XIcon from "@mui/icons-material/X";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";

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
    <footer
      className={`fixed inset-x-0 z-50 bottom-0 flex h-16 items-center justify-between border-t-2 border-black bg-white lg:relative lg:h-[100px] lg:border-t-[3px]`}
    >
      {/* 大画面用ナビゲーション */}
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
          <Link href="https://github.com/SomaTakata">
            <GitHubIcon />
          </Link>
          <Link href="https://twitter.com/soma_takata">
            <XIcon />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex ">
        {/* モード切り替えトグルスイッチ */}
        <div className="flex h-[100px] items-center justify-center gap-4 border-r-[3px] border-black px-8"></div>
        {/* Topに戻るボタン */}
        <div className="hidden w-24 items-center justify-center lg:flex">
          <KeyboardArrowUpIcon
            className="size-10 cursor-pointer transition-all duration-300 hover:scale-125"
            onClick={scrollToTop}
          />
        </div>
      </div>

      {/* 小画面用のモード切り替えとメニュー */}
      <div className="w-full h-16 flex lg:hidden relative">
        {/* モード切り替えトグルスイッチ */}
        <div className="w-1/2 border-r-[2px] gap-4 border-black flex items-center justify-center"></div>

        {/* メニュー開閉ボタン */}
        <div
          className={`w-1/2 flex items-center justify-center gap-3 cursor-pointer duration-300 bg-transparent relative z-10`}
          onClick={toggleMenu}
        >
          <span className="relative z-50 flex items-center gap-3">
            {menuOpen ? (
              <>
                <CloseIcon className="w-7 h-7 text-white" />
                <p className="font-roboto text-lg font-bold text-white">
                  CLOSE
                </p>
              </>
            ) : (
              <>
                <MenuIcon className="w-7 h-7 text-black" />
                <p className="font-roboto text-lg font-bold text-black">MENU</p>
              </>
            )}
          </span>

          {/* 背景アニメーションのための before 疑似要素 */}
          <div
            className={`absolute inset-0 -z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-300 before:transform ${
              menuOpen ? "before:translate-y-0" : "before:-translate-y-full"
            }`}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
