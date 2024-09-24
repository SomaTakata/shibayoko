import EastIcon from "@mui/icons-material/East"; // For the arrow icon
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  date: string;
  description: string;
  imageSrc: string;
  href: string;
}

const NewsCard = ({ date, description, imageSrc, href }: NewsCardProps) => (
  <div className="flex items-center justify-between border-b-2  border-black py-4 md:py-6 lg:border-b-[3px]">
    <div className="flex items-center gap-6 md:gap-12">
      <p className="hidden text-lg font-bold md:flex">{date}</p>
      <Image
        height={80}
        width={150}
        src={imageSrc}
        alt="News"
        className="rounded-lg border-2 border-black"
      />

      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="text-sm font-bold sm:text-base md:hidden">{date}</span>
        <p className="text-sm font-bold sm:text-base md:ml-4 md:text-lg">
          {description}
        </p>
      </div>
    </div>
    <Link href={href}>
      <button className="items-center justify-center rounded-full border-2 border-black p-2 lg:p-3">
        <EastIcon className="h-5 w-6" />
      </button>
    </Link>
  </div>
);

export default NewsCard;
