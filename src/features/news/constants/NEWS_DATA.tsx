import { BookOpen, Users, Twitter } from "lucide-react";
import { NewsItem } from "@/components/shared/NewsItem";

export const NEWS_DATA: NewsItem[] = [
  {
    icon: <BookOpen className="w-5 h-5 text-muted-foreground/60" />,
    date: "2025.7.9",
    title: "新入生歓迎会を開催しました！",
    description:
      "2025年度の新入生を対象に、しばよこの活動内容やメンバー紹介を行う歓迎会を開催しました。多くの新入生が参加し、活発な交流がありました。",
    category: "イベント",
    link: "https://prtimes.jp/main/html/rd/p/000000148.000040741.html",
    type: "Social Media",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-muted-foreground/60" />,
    date: "2025.6.22",
    title: "しばよこ設立の経緯と想いをnoteで公開",
    description:
      "しばよこの設立に至った経緯、メンバーの想い、今後の活動方針について詳しく記載しました。",
    category: "ブログ記事",
    link: "https://note.com/shibayoko_sit/n/n3e5a6d4d6e51",
    type: "Blog Post",
  },
  {
    icon: <Twitter className="w-5 h-5 text-muted-foreground/60" />,
    date: "2025.3.11",
    title: "TechNovaからしばよこになりました！",
    description:
      "2025年度新メンバーの募集を開始しました。エンジニア・デザイナー問わず、創作活動に興味のある方を歓迎します。",
    category: "お知らせ",
    link: "https://x.com/ShibaYoko_SIT/status/1943853851783967146",
    type: "Social Media",
  },
];
