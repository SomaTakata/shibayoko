const WorkCard = ({ title, year, projectName }: { title: string; year: string; projectName: string }) => (
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="aspect-square rounded-lg border-2 border-black bg-white"></div>
        <div className="mt-1 text-sm font-bold sm:text-base">{title} | {year}</div>
        <div className="text-sm font-bold sm:text-base">{projectName}</div>
      </div>
    );
    
    export default WorkCard;
    