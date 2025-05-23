import { ExternalLink, Github, Sparkle, Code, Globe } from "lucide-react";

export default function Works() {
  // プロジェクトデータを配列で定義
  const projectItems = [
    {
      icon: <Code className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.1 - 2024.3",
      title: "Artofolio",
      description:
        "Artofolio is a portfolio service for engineers that beautifully showcases your projects, technical skills, and social media links—just like an art museum.",
      technologies: ["Next.js", "React", "TypeScript", "Three.js"],
      link: "#",
      github: "#",
      status: "Live",
    },
    {
      icon: <Globe className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.2 - 2024.4",
      title: "Portfolio",
      description: "This is a portfolio website that I made for myself",
      technologies: ["Next.js", "React", "TypeScript", "Framer Motion"],
      link: "#",
      github: "#",
      status: "Live",
    },
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.5 - 現在",
      title: "サブスク自動解約",
      description: "This is a service that automatically cancels subscriptions",
      technologies: ["Next.js", "React", "TypeScript", "Browser", "Playwright"],
      link: "#",
      github: "#",
      status: "Development",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto max-h-[50rem] p-4">
      <div className="flex flex-col gap-3">
        {projectItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative transition-all duration-300 hover:bg-foreground hover:text-background border-dashed p-6 rounded-lg cursor-pointer"
          >
            {/* メインコンテンツ */}
            <div className="flex items-start gap-4">
              {/* アイコン */}
              <span className="flex items-center text-muted-foreground border-muted-foreground border-dashed justify-center w-10 h-10 bg-background border-1 rounded-full group-hover:bg-background group-hover:text-foreground transition-colors duration-300 flex-shrink-0">
                {item.icon}
              </span>

              {/* プロジェクト情報 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground group-hover:text-background/70 transition-colors duration-300">
                    {item.period}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                      item.status === "Live"
                        ? "bg-green-500/20 text-green-600 group-hover:bg-green-400 group-hover:text-background"
                        : "bg-orange-500/20 text-orange-600 group-hover:bg-orange-400 group-hover:text-background"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-background transition-colors duration-300">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-muted-foreground group-hover:text-background/80 transition-colors duration-300 mb-3">
                    {item.description}
                  </p>
                )}

                {/* 技術スタック */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* アクションボタン */}
                <div className="flex items-center gap-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary group-hover:text-background transition-colors duration-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary group-hover:text-background transition-colors duration-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                  <span className="text-xs text-muted-foreground group-hover:text-background/60 transition-colors duration-300 ml-auto">
                    クリックで拡大
                  </span>
                </div>
              </div>
            </div>

            {/* ホバー時のボーダー効果 */}
            <div className="absolute inset-0 border border-dashed border-transparent group-hover:border-background/20 rounded-lg transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
