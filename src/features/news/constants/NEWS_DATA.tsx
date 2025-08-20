import { BookOpen, Users } from "lucide-react";
import { NewsItem } from "@/components/shared/NewsItem";

export const NEWS_DATA: NewsItem[] = [
  {
    icon: <BookOpen className="w-5 h-5 text-muted-foreground/60" />,
    date: "2024.9.17",
    title: "Posted LayerX Summer Internship Experience Report!",
    description:
      "Detailed writeup about my experiences and learnings during a 3-month summer internship at LayerX.",
    category: "Internship Report",
    link: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
    type: "Blog Post",
  },
  {
    icon: <Users className="w-5 h-5 text-muted-foreground/60" />,
    date: "2024.7.26",
    title:
      "Posted 3-month engineer internship experience report at How Television!",
    description:
      "Documented my experiences and growth during the engineering internship at How Television.",
    category: "Internship Report",
    link: "https://howtv.hatenablog.com/entry/2024/07/26/174358",
    type: "Blog Post",
  },
];