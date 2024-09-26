import LinkCard from "./LinkCard";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const linkItems = [
  {
    name: "X",
    icon: <FaXTwitter className="h-8 w-8 sm:h-16 sm:w-16" />,
    href: "https://twitter.com/soma_takata",
  },
  {
    name: "Github",
    icon: <IoLogoGithub className="h-8 w-8 sm:h-16 sm:w-16" />,
    href: "https://github.com/SomaTakata",
  },
  {
    name: "Zenn",
    icon: (
      <span className="text-xl font-bold text-black sm:text-4xl lg:text-5xl">
        Zenn
      </span>
    ),
    href: "https://zenn.dev/soma_takata",
  },
];

const LinkSection = () => (
  <section className="flex flex-col w-full gap-6 border-b-2 border-black bg-gray-100 px-5 py-14 sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16 lg:border-b-[3px]">
    <div className="grid w-full grid-cols-3 gap-8 lg:grid-cols-3 xl:grid-cols-3">
      {linkItems.map((link, index) => (
        <LinkCard
          key={index}
          icon={link.icon}
          href={link.href}
          label={link.name}
        />
      ))}
    </div>
  </section>
);

export default LinkSection;
