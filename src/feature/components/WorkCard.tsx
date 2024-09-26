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
      <div className="flex items-center justify-center rounded-lg border-2 border-black bg-white p-10">
        <div className="relative w-full aspect-square">
          <Image
            src={imageSrc}
            alt={`${title} project - ${projectName}`}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>
      </div>

      <p className="mt-1 text-sm font-semibold">
        {title} | {year}
      </p>
      <p className="text-sm font-semibold">{projectName}</p>
    </div>
  </Link>
);

export default WorkCard;
