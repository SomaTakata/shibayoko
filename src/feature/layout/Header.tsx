import Link from "next/link";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b-2 border-black bg-white  px-10 py-5 lg:border-b-[3px] lg:py-7">
      <div className="flex w-full items-center justify-center gap-6 lg:justify-normal">
        {/* 名前は常に表示 */}
        <h1 className="font-roboto text-3xl font-black">SOMA TAKATA</h1>
        
        {/* この説明部分は、モバイルやタブレットでは非表示 */}
        <span className="hidden w-72 flex-wrap font-roboto text-[11px] font-semibold lg:flex">
          This is the portfolio site of Soma Takata, a Japanese man Software Engineer based in Saitama. I like Next.js.
        </span>
      </div>
      
      {/* この部分もモバイルやタブレットでは非表示 */}
      <div className="hidden gap-12 lg:flex ">
        <nav className="flex items-center gap-12 font-bold">
          <div className="font-roboto">WORK</div>
          <div className="font-roboto">PROFILE</div>
          <div className="font-roboto">NEWS</div>
        </nav>
        <div className="flex items-center gap-6">
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
