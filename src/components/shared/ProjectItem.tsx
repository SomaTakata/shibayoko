import { ExternalLink, Github } from "lucide-react";
import { ReactNode } from "react";

export interface ProjectItem {
  icon: ReactNode;
  period: string;
  title: string;
  description?: string;
  technologies: string[];
  link?: string;
  github?: string;
  status: "Live" | "Development";
}

interface ProjectItemComponentProps {
  item: ProjectItem;
  index: number;
}

export function ProjectItemComponent({ item, index }: ProjectItemComponentProps) {
  return (
    <div
      className={
        `flex items-center w-full gap-4 group border-b border-dashed p-6 hover:bg-muted/30 ` +
        (index === 0 ? "hover:border" : "hover:border-x")
      }
    >
      <div className="flex items-start gap-4 w-full">
        <span className="flex items-center text-muted-foreground border-muted-foreground/50 border-dashed justify-center w-10 h-10 bg-background border-1 rounded-full group-hover:bg-background group-hover:text-foreground  flex-shrink-0">
          {item.icon}
        </span>

        <div className="w-full">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground   ">
              {item.period}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full   ${
                item.status === "Live"
                  ? "bg-green-500/20 text-green-600 "
                  : "bg-orange-500/20 text-orange-600"
              }`}
            >
              {item.status}
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>

          {item.description && (
            <p className="text-sm text-muted-foreground  mb-3">
              {item.description}
            </p>
          )}
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary   "
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary   "
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border border-dashed border-transparent  rounded-lg  pointer-events-none"></div>
    </div>
  );
}