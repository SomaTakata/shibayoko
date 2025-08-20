import { cn } from "@/utils/utils";
import { Sparkle } from "lucide-react";

export interface SkillItem {
  name: string;
  experience: string;
  proficiency: number;
  description: string;
  category: string;
}

interface SkillItemComponentProps {
  skill: SkillItem;
  index: number;
  totalItems: number;
}

export function SkillItemComponent({ skill, index, totalItems }: SkillItemComponentProps) {
  return (
    <div
      className={cn(
        "relative w-full p-6 hover:bg-muted/30 transition-all group/item border-dashed",
        {
          "border-b": index < totalItems - 1,
          "lg:border-b-0": index >= totalItems - 2,
          "lg:border-b": index < totalItems - 2,
        },
        {
          "lg:border-r": index % 2 === 0 && index !== totalItems - 1,
        }
      )}
    >
      {(index === 0 || index === totalItems - 1) && (
        <Sparkle
          className={cn(
            "absolute w-4 h-4 z-10 fill-current hidden md:block",
            {
              "-bottom-2 -right-2": index === 0,
              "-top-2 -left-2": index === totalItems - 1,
            }
          )}
        />
      )}
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
                {skill.category}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {skill.experience}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-primary">
              {skill.proficiency}%
            </span>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>

        {skill.description && (
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        )}
      </div>
    </div>
  );
}