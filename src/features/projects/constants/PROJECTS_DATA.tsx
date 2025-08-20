import { Globe } from "lucide-react";
import { ProjectItem } from "@/components/shared/ProjectItem";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    icon: <Globe className="w-5 h-5 text-muted-foreground/60" />,
    period: "2025.8 - Present",
    title: "しばよこ公式サイト",
    description: "芝浦工業大学のクリエイティブサークル「しばよこ」の公式Webサイト。サークルの活動内容、メンバー紹介、ニュースなどを発信しています。",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://shibayoko.vercel.app/",
    github: "",
    status: "Live",
  },
];