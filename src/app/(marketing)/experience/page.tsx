import { Sparkle, Database } from "lucide-react";

export default function Home() {
  // 経歴データを配列で定義
  const timelineItems = [
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2020.4 -",
      title: "芝浦工業大学 入学",
      description: "",
      link: "https://www.shibaura-it.ac.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2023.5 - 2024.2",
      title: "株式会社リクルート",
      description: "フロントエンド開発 (10か月)",
      link: "https://www.recruit.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60 " />,
      period: "2023.11 - 2024.1",
      title: "株式会社MichibikuGroup",
      description: "フロントエンド開発 (2か月)",
      link: "https://michibikugroup.co.jp/",
    },
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.3 - 2025.3",
      title: "TechNova創設 代表",
      description: "プログラミングサークルの設立",
      link: "https://x.com/ShibaYoko_SIT",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.4 - 2024.7",
      title: "株式会社ハウテレビジョン",
      description: "フロントエンド開発 (3か月)",
      link: "https://howtelevision.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.9 -",
      title: "株式会社LayerX",
      description: "フルスタック開発 (2週間)",
      link: "https://layerx.co.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.12 -",
      title: "株式会社メドレー",
      description: "フルスタック開発 (2週間)",
      link: "https://www.medley.jp/",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.1 -",
      title: "株式会社NOT A HOTEL",
      description: "新規機能開発 (2週間)",
      link: "https://notahotel.com/",
    },
    {
      icon: <Sparkle className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.2 -",
      title: "しばよこの設立（TechNovaからの統合）代表",
      description: "エンジニアデザイナーサークルの設立",
      link: "https://x.com/ShibaYoko_SIT",
    },
    {
      icon: <Database className="w-5 h-5 text-muted-foreground/60" />,
      period: "2025.3 - 2025.4",
      title: "株式会社Nulogic",
      description: "新規機能開発 (2ヶ月)",
      link: "https://nulogic.co.jp/",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto  max-h-[43rem] p-4">
      <div className="flex flex-col gap-3">
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
              <span className="text-xs text-muted-foreground">
                {item.period}
              </span>
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
    </div>
  );
}
