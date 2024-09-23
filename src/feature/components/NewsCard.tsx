import EastIcon from '@mui/icons-material/East'; // For the arrow icon
import Image from 'next/image';

interface NewsCardProps {
  date: string;
  description: string;
  imageSrc: string;
}

const NewsCard= ({ date, description, imageSrc }:NewsCardProps) => (
  <div className="flex justify-between items-center border-b-2 border-black py-4">
    <div className="flex items-center gap-6">
      {/* News Image */}
      <Image
        height={100}
        width={150}
        src={imageSrc}
        alt="News"
        className="rounded-lg border-2 border-black"
      />

      {/* Date and Description */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="text-sm sm:text-base font-bold">{date}</span>
        <p className="text-sm sm:text-base font-bold">{description}</p>
      </div>
    </div>

    {/* Arrow Button */}
    <button className="border-2 border-black rounded-full p-2">
      <EastIcon />
    </button>
  </div>
);

export default NewsCard;
