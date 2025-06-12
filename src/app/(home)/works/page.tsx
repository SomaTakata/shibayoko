import { ExternalLink, Github, Sparkle, Code, Globe, User } from "lucide-react";

export default function Works() {
  // プロジェクトデータを配列で定義
  const projectItems = [
    {
      icon: <Globe className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.2 - 現在",
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
      title: "サブスク自動解約",
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
      period: "2024.5 - 現在",
      title: "MazeMaze",
      description: "This is a service that allows podcasting with AI.",
      technologies: ["Next.js", "React", "TypeScript", "RealTime API"],
      link: "https://student.redesigner.jp/portfolios/PF31c7a227d463980aa3d989ca7f9879c9",
      github: "",
      status: "Development",
    },
  ];

  return (
    <div className="flex flex-col p-4">
      {projectItems.map((item, idx) => (
        <div
          key={idx}
          className={
            `flex items-center w-full gap-4 group border-b border-dashed p-6 hover:bg-muted/30 ` +
            (idx === 0 ? "hover:border" : "hover:border-x")
          }
        >
          {/* メインコンテンツ */}
          <div className="flex items-start gap-4 w-full">
            {/* アイコン */}
            <span className="flex items-center text-muted-foreground border-muted-foreground/50 border-dashed justify-center w-10 h-10 bg-background border-1 rounded-full group-hover:bg-background group-hover:text-foreground  flex-shrink-0">
              {item.icon}
            </span>

            {/* プロジェクト情報 */}
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
                {/* 技術スタック */}
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

                {/* アクションボタン */}
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

          {/* ホバー時のボーダー効果 */}
          <div className="absolute inset-0 border border-dashed border-transparent  rounded-lg  pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
