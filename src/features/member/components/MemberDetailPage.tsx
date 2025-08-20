"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MEMBER_DATA } from "../constants/MEMBER_DATA";
import { Member } from "@/types";
import {
  ArrowLeft,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Zap,
  Calendar,
  Briefcase,
  Award,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MemberDetailPageProps {
  memberId: string;
}

export default function MemberDetailPage({ memberId }: MemberDetailPageProps) {
  const member = MEMBER_DATA.find((m) => m.id === memberId);

  if (!member) {
    notFound();
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "zenn":
        return <Zap className="w-5 h-5" />;
      case "website":
        return <Globe className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getSocialLabel = (platform: string) => {
    switch (platform) {
      case "github":
        return "GitHub";
      case "twitter":
        return "Twitter";
      case "linkedin":
        return "LinkedIn";
      case "zenn":
        return "Zenn";
      case "website":
        return "Website";
      default:
        return platform;
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* ヘッダー部分 */}
        <div className="border border-dashed rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* アバター */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-secondary">
                  {member.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* プロフィール情報 */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span className="text-lg text-muted-foreground">
                  {member.role}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  参加日:{" "}
                  {new Date(member.joinDate).toLocaleDateString("ja-JP")}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>

        {/* スキル */}
        <div className="border border-dashed rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            スキル・技術
          </h2>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* 実績・成果 */}
        <div className="border border-dashed rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" />
            実績・成果
          </h2>
          <ul className="space-y-3">
            {member.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ソーシャルリンク */}
        {Object.keys(member.socials).some(
          (key) => member.socials[key as keyof typeof member.socials]
        ) && (
          <div className="border border-dashed rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">リンク</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(member.socials).map(
                ([platform, url]) =>
                  url && (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-dashed rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {getSocialIcon(platform)}
                      <span className="font-medium">
                        {getSocialLabel(platform)}
                      </span>
                    </a>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
