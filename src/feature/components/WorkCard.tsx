import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  year: string;
  projectName: string;
  imageSrc: string;
  projectLink: string;
}

const WorkCard = ({
  title,
  year,
  projectName,
  imageSrc,
  projectLink,
}: WorkCardProps) => (
  <Link href={projectLink}>
    <div className="flex flex-col gap-2">
      <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-black bg-white p-10">
        <div className="relative size-full">
          <Image
            src={imageSrc}
            alt={`${title} - ${projectName}`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-1 text-sm font-semibold">
        {title} | {year}
      </div>
      <div className="text-sm font-semibold">{projectName}</div>
    </div>
  </Link>
);

export default WorkCard;
