import Link from 'next/link';

interface LinkCardProps {
  icon: React.ReactNode;
  href: string; 
}

const LinkCard: React.FC<LinkCardProps> = ({ icon, href }) => (
  <Link href={href}>
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 border-black rounded-lg bg-white aspect-square cursor-pointer hover:bg-gray-100 transition">
      <div className="flex items-center justify-center h-full">
        {icon}
      </div>
    </div>
  </Link>
);

export default LinkCard;
