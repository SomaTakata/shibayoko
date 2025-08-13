import { Sparkle, Database } from "lucide-react";

export default function Home() {
  // Define timeline data in an array
  const timelineItems = [
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2022.4 -",
      title: "Entered Shibaura Institute of Technology",
      description: "",
      link: "https://www.shibaura-it.ac.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2023.5 - 2024.2",
      title: "Recruit Co., Ltd.",
      description: "Frontend development (10 months)",
      link: "https://www.recruit.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60 " />,
      period: "2023.11 - 2024.1",
      title: "MichibikuGroup Co., Ltd.",
      description: "Frontend development (2 months)",
      link: "https://michibikugroup.co.jp/",
    },
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.3 - 2025.3",
      title: "Founded TechNova as Representative",
      description: "Established programming circle",
      link: "https://x.com/ShibaYoko_SIT",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.4 - 2024.7",
      title: "How Television Co., Ltd.",
      description: "Frontend development (3 months)",
      link: "https://howtelevision.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.9 -",
      title: "LayerX Inc.",
      description: "Full-stack development (2 weeks)",
      link: "https://layerx.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.12 -",
      title: "Medley Inc.",
      description: "Full-stack development (2 weeks)",
      link: "https://www.medley.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.1 -",
      title: "NOT A HOTEL Inc.",
      description: "New feature development (2 weeks)",
      link: "https://notahotel.com/",
    },
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.2 -",
      title: "Founded ShibaYoko as Representative",
      description: "Established engineer-designer circle",
      link: "https://x.com/ShibaYoko_SIT",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.3 - 2025.4",
      title: "Nulogic Inc.",
      description: "New feature development (2 months)",
      link: "https://nulogic.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.5 - 2025.7",
      title: "Mercari Inc. (Mercari Hallo)",
      description: "Frontend development (3 months)",
      link: "https://hallo.mercari.com/",
    },
  ];

  return (
    <div className="flex flex-col gap-3 p-4">
      {timelineItems.map((item, idx) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={idx}
          className="flex items-center gap-4 group hover:border hover:bg-muted/30 border-dashed p-6"
        >
          <span className="flex items-center text-muted-foreground border-muted-foreground/50 border-dashed justify-center w-10 h-10 bg-background border-1 rounded-full">
            {item.icon}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">{item.period}</span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
