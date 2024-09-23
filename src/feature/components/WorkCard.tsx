import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  title: string;
  year: string;
  projectName: string;
  imageSrc: string; 
  projectLink: string; 
}

const WorkCard = ({ title, year, projectName, imageSrc, projectLink }: WorkCardProps) => (
  <Link href={projectLink}>
    <div className="flex flex-col gap-2">
      {/* カードの画像部分 */}
      <div className="aspect-square border-2 border-black rounded-lg bg-white flex justify-center items-center p-4">
        <div className="relative w-full h-full">
          <Image 
            src={imageSrc} 
            alt={`${title} - ${projectName}`} 
            layout="fill" 
            objectFit="contain" 
            className="rounded-lg"
          />
        </div>
      </div>

      {/* テキスト部分 */}
      <div className="text-sm font-semibold mt-1">
        {title} | {year}
      </div>
      <div className="text-sm font-semibold">{projectName}</div>
    </div>
  </Link>
);

export default WorkCard;
