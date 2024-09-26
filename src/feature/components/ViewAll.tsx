import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

interface ViewAllProps {
  text: string;
  href: string;
  position?: "start" | "center" | "end";
  width?: string;
}

const ViewAll = ({
  text,
  position = "center",
  width = "w-full",
  href,
}: ViewAllProps) => {
  const alignmentClass =
    position === "start"
      ? "items-start"
      : position === "end"
        ? "items-end"
        : "items-center";

  return (
    <Link
      href={href}
      className={`mt-8 flex flex-col ${alignmentClass} justify-center`}
    >
      <div className={`flex  ${width} flex-col`}>
        <div className={`flex ${width} items-center justify-between `}>
          <p className="font-roboto text-xl font-bold sm:text-2xl">{text}</p>
          <EastIcon className="size-8" />
        </div>

        <div className="relative mt-2 h-[3px] w-full overflow-hidden bg-gray-300">
          <div className="absolute left-0 top-0 h-[3px] w-full animate-slide bg-black"></div>
        </div>
      </div>
    </Link>
  );
};

export default ViewAll;
