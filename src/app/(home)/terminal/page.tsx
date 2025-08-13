"use client";
import {
  Terminal,
  ExternalLink,
  BookOpen,
  Users,
  Code,
  Globe,
  Sparkle,
  User,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState<
    { command: string; response: React.ReactNode }[]
  >([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Skills data
  const skillItems = [
    {
      name: "TypeScript",
      experience: "3 years",
      proficiency: 90,
      description: "Used as primary development language",
      category: "Language",
    },
    {
      name: "React",
      experience: "3 years",
      proficiency: 85,
      description: "Main framework for frontend development",
      category: "Frontend",
    },
    {
      name: "Next.js",
      experience: "2 years",
      proficiency: 80,
      description: "Used for web application development",
      category: "Framework",
    },
    {
      name: "Node.js",
      experience: "2 years",
      proficiency: 75,
      description: "Used for backend development",
      category: "Backend",
    },
    {
      name: "TailwindCSS",
      experience: "2 years",
      proficiency: 85,
      description: "Used for styling",
      category: "Styling",
    },
    {
      name: "Golang",
      experience: "1 years",
      proficiency: 70,
      description: "Used for backend development",
      category: "Language",
    },
  ];

  // News data
  const newsItems = [
    {
      icon: <BookOpen className="w-5 h-5 text-muted-foreground/60" />,
      date: "2024.9.17",
      title: "Posted LayerX Summer Internship Experience Report!",
      description:
        "Detailed writeup about my experiences and learnings during a 3-month summer internship at LayerX.",
      category: "Internship Report",
      link: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
      type: "Blog Post",
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground/60" />,
      date: "2024.7.26",
      title:
        "Posted 3-month engineer internship experience report at How Television!",
      description:
        "Documented my experiences and growth during the engineering internship at How Television.",
      category: "Internship Report",
      link: "https://howtv.hatenablog.com/entry/2024/07/26/174358",
      type: "Blog Post",
    },
  ];

  // Timeline data in terminal style
  const timelineItems = [
    {
      date: "2022.4",
      output: "Entered Shibaura Institute of Technology",
      description: "Started studying in Computer Science Department",
      link: "https://www.shibaura-it.ac.jp/",
      type: "education",
    },
    {
      date: "2023.5",
      output: "Recruit Co., Ltd.",
      description: "Frontend development (10 months)",
      link: "https://www.recruit.co.jp/",
      type: "work",
    },
    {
      date: "2023.11",
      output: "MichibikuGroup Co., Ltd.",
      description: "Frontend development (2 months)",
      link: "https://michibikugroup.co.jp/",
      type: "work",
    },
    {
      date: "2024.3",
      output: "Founded TechNova as Representative",
      description: "Established programming circle",
      link: "https://x.com/ShibaYoko_SIT",
      type: "leadership",
    },
    {
      date: "2024.4",
      output: "How Television Co., Ltd.",
      description: "Frontend development (3 months)",
      link: "https://howtelevision.co.jp/",
      type: "work",
    },
    {
      date: "2024.9",
      output: "LayerX Inc.",
      description: "Full-stack development (2 weeks)",
      link: "https://layerx.co.jp/",
      type: "work",
    },
    {
      date: "2024.12",
      output: "Medley Inc.",
      description: "Full-stack development (2 weeks)",
      link: "https://www.medley.jp/",
      type: "work",
    },
    {
      date: "2025.1",
      output: "NOT A HOTEL Inc.",
      description: "New feature development (2 weeks)",
      link: "https://notahotel.com/",
      type: "work",
    },
    {
      date: "2025.2",
      output: "Founded ShibaYoko as Representative",
      description: "Established engineer-designer circle",
      link: "https://x.com/ShibaYoko_SIT",
      type: "leadership",
    },
    {
      date: "2025.3",
      output: "Nulogic Inc.",
      description: "New feature development (2 months)",
      link: "https://nulogic.co.jp/",
      type: "work",
    },
    {
      date: "2025.5 - 2025.7",
      output: "Mercari Inc. (Mercari Hallo)",
      description: "Frontend development (3 months)",
      link: "https://hallo.mercari.com/",
      type: "work",
    },
  ];

  // Project data
  const projectItems = [
    {
      icon: <Globe className="w-5 h-5 text-muted-foreground/60" />,
      period: "2024.2 - Present",
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
      title: "Subscription Auto-Cancel",
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
      period: "2024.5 - Present",
      title: "MazeMaze",
      description: "This is a service that allows podcasting with AI.",
      technologies: ["Next.js", "React", "TypeScript", "RealTime API"],
      link: "https://student.redesigner.jp/portfolios/PF31c7a227d463980aa3d989ca7f9879c9",
      github: "",
      status: "Development",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const handleCommand = (command: string) => {
    const lowerCommand = command.toLowerCase().trim();
    let response: React.ReactNode = "";

    switch (lowerCommand) {
      case "help":
        response =
          "Available commands: help, ls, cat career.log, cat skills.json, cat news/, clear, whoami, pwd, date";
        break;
      case "ls":
        response = "career.log  skills.json  projects/  news/";
        break;
      case "cat career.log":
        response = (
          <div>
            {timelineItems.map((item, idx) => (
              <div key={idx} className="mb-3 group">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>[{item.date}]</span>
                  <span className="text-muted-foreground">
                    ─────────────────────────
                  </span>
                </div>
                <div className="ml-4 mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    <span
                      className={`font-semibold ${getTypeColor(item.type)}`}
                    >
                      {item.output}
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {item.description && (
                    <div className="text-muted-foreground text-xs mt-1 ml-6">
                      └─ {item.description}
                    </div>
                  )}
                </div>
                {idx < timelineItems.length - 1 && (
                  <div className="text-muted-foreground mt-2">
                    ├─────────────────────────────────────────
                  </div>
                )}
              </div>
            ))}
          </div>
        );
        break;
      case "cat skills.json":
        response = (
          <div className="space-y-3">
            <div className="text-cyan-500 dark:text-cyan-400 font-semibold mb-4">
              {"{"}
            </div>
            <div className="ml-4 space-y-4">
              <div className="text-yellow-500 dark:text-yellow-400">
                "skills": [
              </div>
              {skillItems.map((skill, idx) => (
                <div key={idx} className="ml-8 space-y-1">
                  <div className="text-muted-foreground">{"{"}</div>
                  <div className="ml-4 space-y-1">
                    <div className="text-green-500 dark:text-green-400">
                      "name": "{skill.name}",
                    </div>
                    <div className="text-green-500 dark:text-green-400">
                      "experience": "{skill.experience}",
                    </div>
                    <div className="text-green-500 dark:text-green-400">
                      "proficiency": {skill.proficiency},
                    </div>
                    <div className="text-green-500 dark:text-green-400">
                      "description": "{skill.description}",
                    </div>
                    <div className="text-green-500 dark:text-green-400">
                      "category": "{skill.category}"
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    {"}"}
                    {idx < skillItems.length - 1 ? "," : ""}
                  </div>
                </div>
              ))}
              <div className="text-yellow-500 dark:text-yellow-400">]</div>
            </div>
            <div className="text-cyan-500 dark:text-cyan-400 font-semibold">
              {"}"}
            </div>
          </div>
        );
        break;
      case "cat news/":
      case "cat news":
        response = (
          <div className="space-y-3">
            <div className="text-cyan-500 dark:text-cyan-400 font-semibold mb-4">
              Latest News & Articles
            </div>
            {newsItems.map((news, idx) => (
              <div
                key={idx}
                className="border-l-2 border-blue-400 pl-4 ml-2 mb-4"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  {news.icon}
                  <span>[{news.date}]</span>
                  <span className="bg-muted px-2 py-1 rounded text-xs">
                    {news.category}
                  </span>
                </div>
                <div className="mt-2">
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors"
                  >
                    {news.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="text-muted-foreground text-sm mt-1">
                    {news.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "cat projects/":
        response = (
          <div className="space-y-3">
            <div className="text-cyan-500 dark:text-cyan-400 font-semibold mb-4">
              Projects
            </div>
            {projectItems.map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-green-400 pl-4 ml-2 mb-4"
              >
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  {item.icon}
                  <span>{item.period}</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === "Live"
                        ? "bg-green-500/20 text-green-600"
                        : "bg-orange-500/20 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="mt-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg text-primary">
                      {item.title}
                    </span>
                  </div>
                  {item.description && (
                    <div className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
                      >
                        <Terminal size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "clear":
        setCommandHistory([]);
        return;
      case "whoami":
        response = "Software Engineer & Full-stack Developer";
        break;
      case "pwd":
        response = "/home/user/portfolio";
        break;
      case "date":
        response = new Date().toLocaleString();
        break;
      case "":
        return;
      default:
        response = `Command not found: ${command}. Type 'help' for available commands.`;
    }
    setCommandHistory((prev) => [...prev, { command, response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand);
      setCurrentCommand("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex].command);
        }
      }
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return "🎓";
      case "work":
        return "💼";
      case "leadership":
        return "👑";
      default:
        return "📋";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "text-blue-400";
      case "work":
        return "text-green-400";
      case "leadership":
        return "text-yellow-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    // Terminal content
    <div className="max-w-full overflow-x-auto p-4 space-y-1 text-green-500 dark:text-green-400 font-mono text-sm">
      {/* Command history display */}
      {commandHistory.map((entry, idx) => (
        <div key={idx} className="mb-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 dark:text-blue-400">
              user@portfolio
            </span>
            <span className="text-primary">~</span>
            <span className="text-yellow-500  dark:text-yellow-400">$</span>
            <span className="text-green-500 dark:text-green-400">
              {entry.command}
            </span>
          </div>
          <div className="text-muted-foreground ml-4">{entry.response}</div>
        </div>
      ))}

      {/* Final line (input enabled) */}
      {!isTyping && (
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400">
            user@portfolio
          </span>
          <span className="text-primary">~</span>
          <span className="text-yellow-500  dark:text-yellow-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-green-500 dark:text-green-400 outline-none flex-1 font-mono"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      )}
    </div>
  );
}
