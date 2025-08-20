"use client";

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { MEMBER_DATA } from "../constants/MEMBER_DATA";
import { Member } from "@/types";
import { Github, Twitter, Linkedin, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { useSearch } from "@/contexts/SearchContext";

export default function MemberPage() {
  const { searchQuery } = useSearch();

  const filteredMembers = useMemo(() => {
    if (!searchQuery) return MEMBER_DATA;

    return MEMBER_DATA.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* メンバーカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            検索条件に一致するメンバーが見つかりませんでした。
          </p>
        </div>
      )}
    </div>
  );
}

interface MemberCardProps {
  member: Member;
}

function MemberCard({ member }: MemberCardProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "zenn":
        return <Zap className="w-4 h-4" />;
      case "website":
        return <Globe className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Link href={`/member/${member.id}`}>
      <div className="border border-dashed rounded-lg p-6 hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
        {/* アバターとプロフィール */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-secondary">
              {member.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <p className="text-xs text-muted-foreground mt-1">
              参加日: {new Date(member.joinDate).toLocaleDateString("ja-JP")}
            </p>
          </div>
        </div>

        {/* 自己紹介 */}
        <p className="text-sm text-muted-foreground mb-4 max-h-[4.5rem] line-clamp-3 overflow-hidden">
          {member.bio}
        </p>

        {/* スキル */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {member.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {member.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{member.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* ソーシャルリンク */}
        <div className="flex gap-2">
          {Object.entries(member.socials).map(
            ([platform, url]) =>
              url && (
                <button
                  key={platform}
                  onClick={(e) => handleSocialClick(e, url)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}の${platform}を開く`}
                >
                  {getSocialIcon(platform)}
                </button>
              )
          )}
        </div>
      </div>
    </Link>
  );
}
