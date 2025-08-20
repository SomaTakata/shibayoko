import { Code, Globe, Sparkle, User } from "lucide-react";
import { ProjectItem } from "@/components/shared/ProjectItem";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    icon: <Globe className="w-5 h-5 text-muted-foreground/60" />,
    period: "2024.2 - Present",
    title: "Portfolio",
    description: "This is a portfolio website that I made for myself.",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion"],
    link: "https://soma-takata.vercel.app/",
    github: "",
    status: "Live",
  },
  {
    icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
    period: "2025.3 - 2025.3",
    title: "Subscription Auto-Cancel",
    description:
      "This is a service that automatically cancels subscriptions.",
    technologies: ["Next.js", "React", "TypeScript", "Browser", "Playwright"],
    link: "https://x.com/ysk_en/status/1902151281042714654",
    github: "",
    status: "Development",
  },
  {
    icon: <Code className="w-5 h-5 text-muted-foreground/60" />,
    period: "2025.4 - 2025.4",
    title: "Artofolio",
    description:
      "Artofolio is a portfolio service for engineers that beautifully showcases your projects, technical skills, and social media links—just like an art museum.",
    technologies: ["Next.js", "React", "TypeScript", "Three.js"],
    link: "https://github.com/SomaTakata/ARTOFOLIO",
    github: "",
    status: "Development",
  },
  {
    icon: <User className="w-5 h-5 text-muted-foreground/60" />,
    period: "2024.5 - Present",
    title: "MazeMaze",
    description: "This is a service that allows podcasting with AI.",
    technologies: ["Next.js", "React", "TypeScript", "RealTime API"],
    link: "https://student.redesigner.jp/portfolios/PF31c7a227d463980aa3d989ca7f9879c9",
    github: "",
    status: "Development",
  },
];