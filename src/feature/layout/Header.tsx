import Link from "next/link";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <header className="py-5 px-10 flex items-center justify-between border-b-[3px] border-black">
      <div className="flex gap-6 items-center justify-center lg:justify-normal w-full">
        {/* 名前は常に表示 */}
        <h1 className="font-roboto font-black text-3xl">SOMA TAKATA</h1>
        
        {/* この説明部分は、モバイルやタブレットでは非表示 */}
        <span className="font-roboto font-semibold text-[11px] w-72 lg:flex flex-wrap hidden">
          This is the portfolio site of Soma Takata, a Japanese man Software Engineer based in Saitama. I like Next.js.
        </span>
      </div>
      
      {/* この部分もモバイルやタブレットでは非表示 */}
      <div className="lg:flex gap-12 hidden ">
        <nav className="flex gap-8 font-bold items-center">
          <div className="font-roboto">WORK</div>
          <div className="font-roboto">PROFILE</div>
          <div className="font-roboto">NEWS</div>
        </nav>
        <div className="flex gap-4 items-center">
          <Link href="/ja">
            <GitHubIcon />
          </Link>
          <Link href="/ja">
            <XIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
