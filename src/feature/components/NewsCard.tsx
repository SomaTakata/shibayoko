import EastIcon from '@mui/icons-material/East'; // For the arrow icon
import Image from 'next/image';

interface NewsCardProps {
  date: string;
  description: string;
  imageSrc: string;
}

const NewsCard= ({ date, description, imageSrc }:NewsCardProps) => (
  <div className="flex justify-between items-center border-b-[2px]  lg:border-b-[3px] border-black py-4 md:py-6">
    <div className="flex items-center gap-6 md:gap-12">
      <p className='hidden md:flex text-lg font-bold'>{date}</p>
      <Image
        height={80}
        width={150}
        src={imageSrc}
        alt="News"
        className="rounded-lg border-2 border-black"
      />

      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="text-sm sm:text-base md:hidden font-bold">{date}</span>
        <p className="text-sm sm:text-base font-bold md:ml-4 md:text-lg">{description}</p>
      </div>
    </div>

    <button className="border-2 border-black rounded-full p-2 items-center justify-center lg:p-3">
      <EastIcon className='w-6 h-5'/>
    </button>
  </div>
);

export default NewsCard;
