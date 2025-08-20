import { SkillItemComponent } from "@/components/shared/SkillItem";
import { SKILLS_DATA } from "../constants/SKILLS_DATA";

export default function SkillsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {SKILLS_DATA.map((skill, idx) => (
        <SkillItemComponent 
          key={idx} 
          skill={skill} 
          index={idx} 
          totalItems={SKILLS_DATA.length} 
        />
      ))}
    </div>
  );
}