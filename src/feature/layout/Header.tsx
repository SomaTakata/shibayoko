import Link from "next/link";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <header className="py-5 px-10 flex items-center justify-between border-b-[3px] border-black">
      <div className="flex gap-6 items-center">
        <h1 className="font-roboto font-black text-[26px]">SOMA TAKATA</h1>
        <span className="font-roboto font-semibold text-[11px] w-72 flex flex-wrap">
          This is the portfolio site of Soma Takata, a Japanese man Software Engineer based in Saitama. I like Next.js.
        </span>
      </div>
      <div className="flex gap-12">
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
