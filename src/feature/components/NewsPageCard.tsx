import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  date: string;
  description: string;
  imageSrc: string;
  href: string;
}

const NewsPageCard = ({ date, description, imageSrc, href }: NewsCardProps) => (
  <Link href={href}>
    <div className="flex flex-col gap-2">
      <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-black bg-white p-10">
        <div className="relative size-full">
          <Image
            src={imageSrc}
            alt={`${description}`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <span className="text-sm font-bold sm:text-base ">{date}</span>
        <p className="text-sm font-bold lg:text-base">{description}</p>
      </div>
    </div>
  </Link>
);

export default NewsPageCard;
