import { ProjectItemComponent } from "@/components/shared/ProjectItem";
import { PROJECTS_DATA } from "../constants/PROJECTS_DATA";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col p-4">
      {PROJECTS_DATA.map((item, idx) => (
        <ProjectItemComponent key={idx} item={item} index={idx} />
      ))}
    </div>
  );
}