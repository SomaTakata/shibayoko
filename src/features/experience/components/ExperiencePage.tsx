import { TimelineItemComponent } from "@/components/shared/TimelineItem";
import { EXPERIENCE_DATA } from "../constants/EXPERIENCE_DATA";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {EXPERIENCE_DATA.map((item, idx) => (
        <TimelineItemComponent key={idx} item={item} index={idx} />
      ))}
    </div>
  );
}