import { NewsItemComponent } from "@/components/shared/NewsItem";
import { NEWS_DATA } from "../constants/NEWS_DATA";

export default function NewsPage() {
  return (
    <div className="flex flex-col p-4">
      {NEWS_DATA.map((item, idx) => (
        <NewsItemComponent key={idx} item={item} index={idx} />
      ))}
    </div>
  );
}