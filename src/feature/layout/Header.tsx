import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Propsの型定義
type HeaderProps = {
  menuOpen: boolean;
};

const Header = ({ menuOpen }: HeaderProps) => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center border-b-2 border-black bg-white px-10 py-5 lg:border-b-[3px] lg:py-7 transition-all duration-500 ${
        menuOpen
          ? "h-[calc(100vh-62px)] flex-col justify-center"
          : "h-20 lg:h-[100px] justify-between"
      }`}
    >
      <div className="flex w-full items-center justify-center gap-6 lg:justify-normal">
        {/* 名前部分 */}
        <h1
          className={`font-roboto transition-all duration-500 ease-in font-black ${
            menuOpen ? "text-4xl sm:text-7xl" : "text-3xl"
          }`}
        >
          <Link href="/" aria-label="Home">
            SOMA TAKATA
          </Link>
        </h1>

        {/* 説明文（大画面のみ表示） */}
        {!menuOpen && (
          <span className="hidden w-72 flex-wrap font-roboto text-[11px] font-semibold lg:flex">
            This is the portfolio site of Soma Takata, a Japanese man Software
            Engineer based in Saitama. I like Next.js.
          </span>
        )}
      </div>

      {/* メニュー項目 */}
      {menuOpen && (
        <nav className="flex flex-col w-full duration-500 ease-in-out transition-all delay-300 items-center justify-center mt-10 text-lg font-bold">
          <Link
            href="/works"
            className="border-y-2 border-black w-full py-3 px-2 flex justify-between items-center transition-all delay-500 hover:bg-gray-100"
            aria-label="Works"
          >
            <span>作品一覧</span>
            <span>WORK</span>
          </Link>
          <Link
            href="/profile"
            className="border-b-2 border-black w-full py-3 px-2 flex justify-between items-center transition-all delay-700 hover:bg-gray-100"
            aria-label="Profile"
          >
            <span>プロフィール</span>
            <span>PROFILE</span>
          </Link>
          <Link
            href="/news"
            className="border-b-2 border-black w-full py-3 px-2 flex justify-between items-center transition-all delay-900 hover:bg-gray-100"
            aria-label="News"
          >
            <span>お知らせ</span>
            <span>NEWS</span>
          </Link>
        </nav>
      )}

      {/* フッターアイコン */}
      {menuOpen && (
        <div className="flex gap-6 transition-all ease-in-out duration-500 w-full justify-end mt-6 delay-1200">
          <Link href="https://github.com/SomaTakata" aria-label="GitHub">
            <IoLogoGithub className="text-black h-8 w-8  hover:text-gray-700 transition-colors duration-300" />
          </Link>
          <Link href="https://twitter.com/soma_takata" aria-label="Twitter">
            <FaXTwitter className="text-black h-8 w-8 hover:text-gray-700 transition-colors duration-300" />
          </Link>
        </div>
      )}

      {/* 通常ヘッダー（大画面のみ表示） */}
      {!menuOpen && (
        <div className="hidden gap-12 lg:flex">
          <nav className="flex items-center gap-12 font-bold">
            <Link
              href="/works"
              className="font-roboto hover:underline"
              aria-label="Works"
            >
              WORK
            </Link>
            <Link
              href="/profile"
              className="font-roboto hover:underline"
              aria-label="Profile"
            >
              PROFILE
            </Link>
            <Link
              href="/news"
              className="font-roboto hover:underline"
              aria-label="News"
            >
              NEWS
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/SomaTakata" aria-label="GitHub">
              <IoLogoGithub className="hover:text-gray-700 transition-colors duration-300 h-7 w-7" />
            </Link>
            <Link href="https://twitter.com/soma_takata" aria-label="Twitter">
              <FaXTwitter className="hover:text-gray-700 transition-colors duration-300 h-7 w-7" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
