import Link from 'next/link';

interface LinkCardProps {
  icon: React.ReactNode;
  href: string; 
}

const LinkCard: React.FC<LinkCardProps> = ({ icon, href }) => (
  <Link href={href}>
    <div className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-black bg-white transition hover:bg-gray-100 sm:gap-2">
      <div className="flex h-full items-center justify-center">
        {icon}
      </div>
    </div>
  </Link>
);

export default LinkCard;
