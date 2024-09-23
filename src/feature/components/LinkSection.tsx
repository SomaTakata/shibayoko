import LinkCard from "./LinkCard";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const linkItems = [
  { name: 'X', icon: <XIcon className="w-10 h-10 sm:w-12 sm:h-12 "  />, href: 'https://twitter.com' },
  { name: 'Github', icon: <GitHubIcon className="w-10 h-10 sm:w-12 sm:h-12 " />, href: 'https://github.com' },
  { name: 'Zenn', icon: <span className="text-2xl sm:text-3xl font-bold text-black">Zenn</span>, href: 'https://zenn.dev' },
];

const LinkSection = () => (
  <section className="flex flex-col gap-6 border-b-[3px] border-black px-5 py-14 sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16">
   
        <h2 className="font-roboto text-4xl sm:text-5xl font-black tracking-widest text-white text-stroke">LINK</h2>


      <div className="grid w-full grid-cols-3 gap-8 lg:grid-cols-3 xl:grid-cols-3">
        {linkItems.map((link, index) => (
          <LinkCard key={index} icon={link.icon} href={link.href} />
        ))}
      </div>
  
  </section>
);

export default LinkSection;
