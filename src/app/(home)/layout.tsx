"use client";

// import { useState } from "react";
import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { siteConfig } from "@/constants/site.config";
import { cn } from "@/utils/utils";
import {
  PanelsTopLeft,
  Shield,
  Database,
  // ArrowUpRight,
  Twitter,
  Linkedin,
  Instagram,
  Newspaper,
  Activity,
  Terminal,
  User,
  Circle,
  AlignJustify,
  X,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchProvider, useSearch } from "@/contexts/SearchContext";
import { Hanuman } from "next/font/google";

// Search Bar Component
function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="名前、役職、スキルで検索..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 h-14 border-none shadow-none focus-visible:ring-0"
      />
    </div>
  );
}

const techConfig = [
  {
    icon: <PanelsTopLeft className="size-4" />,
    category: "1",
    name: "About",
    description: "しばよこの創設理由や目標、活動内容について紹介します。",
    link: "/about",
  },
  {
    icon: <User className="size-4" />,
    category: "2",
    name: "Member",
    description:
      "しばよこのメンバー紹介。各メンバーの役職や特技、SNSを確認できます。",
    link: "/member",
  },
  {
    icon: <Database className="size-4" />,
    category: "3",
    name: "Works",
    description:
      "しばよこで手がけたプロジェクトや作品を確認することができます。",
    link: "/works",
  },
  {
    icon: <Newspaper className="size-4" />,
    category: "4",
    name: "News",
    description:
      "しばよこで手がけたプロジェクトや作品を確認することができます。",
    link: "/news",
  },
  {
    icon: <Terminal className="size-4" />,
    category: "5",
    name: "Terminal",
    description:
      "ターミナル風のインタラクティブなコマンドラインでしばよこを探索してみてください。",
    link: "/terminal",
  },
  {
    icon: <Activity className="size-4" />,
    category: "6",
    name: "Activity",
    description:
      "メンバーそれぞれの活動や貢献を確認できるページとなっています！",
    link: "/activity",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { data: session, isPending } = useSession();
  const pathname = usePathname();
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const toggleMobileModal = () => {
    setIsMobileModalOpen(!isMobileModalOpen);
  };

  const closeMobileModal = () => {
    setIsMobileModalOpen(false);
  };

  return (
    <SearchProvider>
      {/* Mobile Modal Overlay */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-y mt-2 border-dashed">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={closeMobileModal}
              >
                <Circle size={15} />
                <span className="font-mono text-sm">Agenda</span>
              </Link>
              <button
                onClick={closeMobileModal}
                className="hover:bg-muted rounded-sm transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col">
                {/* Navigation Items */}
                {techConfig.map((tech, index) => {
                  if (
                    pathname &&
                    pathname.replace(/^\//, "") === tech.name.toLowerCase()
                  ) {
                    return (
                      <div
                        key={tech.name}
                        className={cn(
                          "relative w-full p-6  transition-all duration-150 group/item border-dashed border-b"
                        )}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="group-hover/item:animate-pulse">
                            {tech.icon}
                          </span>
                          <h1 className="text-3xl font-bold font-heading tracking-tight">
                            {tech.name}
                          </h1>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    );
                  }

                  if (
                    pathname &&
                    pathname.replace(/^\//, "") !== tech.name.toLowerCase()
                  ) {
                    return (
                      <a
                        href={tech.name.toLowerCase()}
                        key={tech.name}
                        className={cn(
                          cn(
                            "flex gap-2 items-center w-full p-6 transition-all duration-150 group/item border-dashed border-b hover:text-primary hover:font-semibold text-muted-foreground"
                          )
                        )}
                      >
                        <span className="">{tech.icon}</span>
                        <p className="text-sm">{tech.name}</p>
                      </a>
                    );
                  }
                  return null;
                })}

                {/* Social Links */}
                <div className="p-4 border-b border-dashed">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-dashed text-muted-foreground border-muted hover:text-primary"
                    >
                      <a
                        href={siteConfig.socials.twitter}
                        target="_blank"
                        className="gap-2"
                      >
                        <Twitter className="size-3" />
                        <span className="text-xs">Twitter</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-dashed text-muted-foreground hover:text-primary"
                    >
                      <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        className="gap-2"
                      >
                        <Linkedin className="size-3" />
                        <span className="text-xs">LinkedIn</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-dashed text-muted-foreground hover:text-primary"
                    >
                      <a
                        href={siteConfig.socials.instagram}
                        target="_blank"
                        className="gap-2"
                      >
                        <Instagram className="size-3" />
                        <span className="text-xs">Instagram</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden sticky top-0 pt-2 bg-background z-10">
        <div
          id="nav"
          className="w-full flex items-center justify-end border-y border-dashed divide-x"
        >
          <div
            id="brand"
            className="font-mono text-sm flex-1 flex items-center h-full px-3 border-dashed"
          >
            <Link href="/" className="hover:underline flex items-center gap-2">
              <Circle size={15} />
              しばよこ
            </Link>
          </div>
          <ThemeToggler className="border-dashed size-10 md:size-14" />
          <div
            id="brand"
            className="font-mono text-sm flex items-center h-full px-3 border-dashed cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={toggleMobileModal}
          >
            <AlignJustify size={15} />
          </div>
          {/* {!isPending &&
                  (session ? (
                    <Button
                      className="h-full border-dashed"
                      size="lg"
                      variant="ghost"
                      asChild
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 group/nav"
                      >
                        <span>Dashboard</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                          <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                          <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      className="h-full border-dashed"
                      size="lg"
                      variant="ghost"
                      asChild
                    >
                      <Link
                        href="/sign-in"
                        className="flex items-center gap-2 group/nav"
                      >
                        <span>Sign In</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                          <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                          <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                      </Link>
                    </Button>
                  ))} */}
          {/* <UserProfile className="border-dashed size-10 md:size-14" /> */}
        </div>
        <div className="flex flex-col bg-background items-center justify-start group/soma border-dashed">
          {techConfig.map((tech, index) => {
            if (
              pathname &&
              pathname.replace(/^\//, "") === tech.name.toLowerCase()
            ) {
              return (
                <div
                  key={tech.name}
                  className={cn(
                    "relative w-full p-6  transition-all duration-150 group/item border-dashed border-b"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="group-hover/item:animate-pulse">
                      {tech.icon}
                    </span>
                    <h1 className="text-3xl font-bold font-heading tracking-tight">
                      {tech.name}
                    </h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      <div className="w-full md:h-screen grid place-items-center">
        <div className="w-full max-w-7xl mx-auto border border-t-0 md:border-t border-dashed flex flex-col mb-2 md:mt-2">
          <div className="w-full flex justify-between divide-x">
            <div className="hidden md:flex flex-col w-1/3 aspect-square bg-background items-center justify-start group/soma border-dashed">
              <div
                id="brand"
                className="md:border-b w-full border-dashed flex items-center justify-start"
              >
                <Link
                  href="/"
                  className="flex items-center gap-2 w-full p-4 px-4"
                >
                  <svg
                    className="w-6 h-6 aspect-square"
                    viewBox="0 0 219 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 146.863C0 119.655 22.057 97.5977 49.2656 97.5977H159.226C164.668 97.5977 169.08 102.009 169.08 107.451V133.463C169.80 160.672 147.023 182.729 119.814 182.729H9.85312C4.41139 182.729 0 178.317 0 172.875V146.863Z"
                      fill="currentColor"
                    />
                    <path
                      d="M49.4756 49.8184C49.4756 22.6097 71.5325 0.552734 98.7412 0.552734H208.702C214.144 0.552734 218.555 4.96413 218.555 10.4059V36.4181C218.555 63.6267 196.498 85.6837 169.29 85.6837H59.3287C53.887 85.6837 49.4756 81.2723 49.4756 75.8306V49.8184Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
              {techConfig.map((tech, index) => {
                if (
                  pathname &&
                  pathname
                    .replace(/^\//, "")
                    .startsWith(tech.name.toLowerCase())
                ) {
                  return (
                    <div
                      key={tech.name}
                      className={cn(
                        "relative w-full p-6  transition-all duration-150 group/item border-dashed border-b"
                      )}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="group-hover/item:animate-pulse">
                          {tech.icon}
                        </span>
                        <h1 className="text-3xl font-bold font-heading tracking-tight">
                          {tech.name}
                        </h1>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  );
                }

                if (
                  pathname &&
                  pathname.replace(/^\//, "") !== tech.name.toLowerCase()
                ) {
                  return (
                    <a
                      href={tech.link}
                      key={tech.name}
                      className={cn(
                        cn(
                          "flex gap-2 items-center w-full p-6 transition-all duration-150 group/item border-dashed border-b hover:text-primary hover:font-semibold text-muted-foreground"
                        )
                      )}
                    >
                      <span className="">{tech.icon}</span>
                      <p className="text-sm">{tech.name}</p>
                    </a>
                  );
                }
                return null;
              })}
              <div
                id="cta"
                className="hidden md:flex flex-wrap items-center gap-4 py-11 border-b border-dashed w-full"
              />
              <div
                id="cta"
                className="hidden md:flex flex-wrap items-center gap-4 p-4 border-none"
              >
                <Button
                  variant="outline"
                  asChild
                  className="relative border-dashed text-muted-foreground hover:text-primary"
                >
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    className="gap-2 group"
                  >
                    <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <Twitter className="size-4" />
                    <span>Twitter</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="relative border-dashed text-muted-foreground hover:text-primary"
                >
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    className="gap-2 group"
                  >
                    <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <Linkedin className="size-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="relative border-dashed text-muted-foreground hover:text-primary"
                >
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    className="gap-2 group"
                  >
                    <div className="w-full h-[1px] bg-linear-to-r from-primary/0 via-primary to-primary/0 absolute top-0 -left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <Instagram className="size-4" />
                    <span>Instagram</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div
                id="nav"
                className="hidden w-full md:flex items-center justify-end border-b border-dashed divide-x"
              >
                {pathname?.startsWith("/member") && (
                  <div className="flex items-center flex-1 border-none divide-x">
                    {pathname === "/member" && (
                      <div className="flex-1 px-4">
                        <SearchBar />
                      </div>
                    )}
                    {pathname !== "/member" && (
                      <Button
                        variant="ghost"
                        asChild
                        className="h-14 border-r border-dashed rounded-none hover:bg-muted/50"
                      >
                        <Link
                          href="/member"
                          className="flex items-center gap-2"
                        >
                          <span>←</span>
                          <span>メンバー一覧に戻る</span>
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
                <ThemeToggler className="border-dashed size-10 md:size-14" />{" "}
                {/* {!isPending &&
                  (session ? (
                    <Button
                      className="h-full border-dashed"
                      size="lg"
                      variant="ghost"
                      asChild
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 group/nav"
                      >
                        <span>Dashboard</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                          <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                          <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      className="h-full border-dashed"
                      size="lg"
                      variant="ghost"
                      asChild
                    >
                      <Link
                        href="/sign-in"
                        className="flex items-center gap-2 group/nav"
                      >
                        <span>Sign In</span>
                        <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                          <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                          <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
                        </div>
                      </Link>
                    </Button>
                  ))} */}
                {/* <UserProfile className="border-dashed size-10 md:size-14" /> */}
              </div>
              <div className="flex-1 relative">
                <div className="md:absolute inset-0 md:overflow-y-auto">
                  {/* Page content is inserted here */}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}
