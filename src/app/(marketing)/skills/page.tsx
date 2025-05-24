import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";

export default function Skills() {
  // スキルデータを配列で定義
  const skillItems = [
    {
      name: "TypeScript",
      experience: "3 years",
      proficiency: 90,
      description: "主要な開発言語として使用",
      category: "Language",
    },
    {
      name: "React",
      experience: "3 years",
      proficiency: 85,
      description: "フロントエンド開発のメインフレームワーク",
      category: "Frontend",
    },
    {
      name: "Next.js",
      experience: "2 years",
      proficiency: 80,
      description: "Webアプリケーション開発に使用",
      category: "Framework",
    },
    {
      name: "Node.js",
      experience: "2 years",
      proficiency: 75,
      description: "バックエンド開発に使用",
      category: "Backend",
    },
    {
      name: "TailwindCSS",
      experience: "2 years",
      proficiency: 85,
      description: "スタイリングに使用",
      category: "Styling",
    },
    {
      name: "Golang",
      experience: "1 years",
      proficiency: 70,
      description: "バックエンド開発に使用",
      category: "Language",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {skillItems.map((skill, idx) => (
        <div
          key={idx}
          className={cn(
            "relative w-full p-6 hover:bg-muted/30 transition-all group/item border-dashed",
            {
              "border-b": idx < skillItems.length - 1,
              "lg:border-b-0": idx >= skillItems.length - 2,
              "lg:border-b": idx < skillItems.length - 2,
            },
            {
              "lg:border-r": idx % 2 === 0 && idx !== skillItems.length - 1,
            }
          )}
        >
          {(idx === 0 || idx === skillItems.length - 1) && (
            <Sparkle
              className={cn(
                "absolute w-4 h-4 z-10 fill-current hidden md:block",
                {
                  "-bottom-2 -right-2": idx === 0,
                  "-top-2 -left-2": idx === skillItems.length - 1,
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

            {/* プログレスバー */}
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>

            {skill.description && (
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
