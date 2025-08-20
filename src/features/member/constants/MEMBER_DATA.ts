import { Member } from "@/types";

export const MEMBER_DATA: Member[] = [
  {
    id: "soma-takata",
    name: "Soma Takata",
    role: "代表・フルスタック",
    bio: "しばよこの代表者。Next.jsとTailwind CSSを使用したWebアプリケーション開発を得意とする。サークル運営と技術指導を行っている。",
    avatar: "/avatars/soma.jpg",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    achievements: [
      "しばよこサークル設立",
      "複数の企業でのインターンシップ経験",
      "フルスタック開発プロジェクトのリード",
    ],
    joinDate: "2024-02-01",
    socials: {
      github: "https://github.com/SomaTakata",
      twitter: "https://x.com/soma_takata",
      zenn: "https://zenn.dev/soma_takata",
      linkedin: "https://www.linkedin.com/in/soma-takata-819293303/",
    },
  },
];
