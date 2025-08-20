"use client";
import { Terminal, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SKILLS_DATA } from "@/features/skills/constants/SKILLS_DATA";
import { NEWS_DATA } from "@/features/news/constants/NEWS_DATA";
import { PROJECTS_DATA } from "@/features/projects/constants/PROJECTS_DATA";
import { TERMINAL_TIMELINE_DATA } from "../constants/TERMINAL_DATA";

export default function TerminalPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState<
    { command: string; response: React.ReactNode }[]
  >([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
          "Available commands: help, ls, cat projects/, cat news/, clear, whoami, pwd, date";
        break;
      case "ls":
        response = "history.log  projects/  news/  README.md";
        break;
        break;
      case "cat news/":
      case "cat news":
        response = (
          <div className="space-y-3">
            <div className="text-cyan-500 dark:text-cyan-400 font-semibold mb-4">
              Latest News & Articles
            </div>
            {NEWS_DATA.map((news, idx) => (
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
            {PROJECTS_DATA.map((item, idx) => (
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
        response = "ShibaYoko - 芝浦工業大学のクリエイティブサークル";
        break;
      case "pwd":
        response = "/home/shibayoko/circle";
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
    <div className="max-w-full overflow-x-auto p-4 space-y-1 text-green-500 dark:text-green-400 font-mono text-sm">
      {commandHistory.map((entry, idx) => (
        <div key={idx} className="mb-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 dark:text-blue-400">
              shibayoko@terminal
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

      {!isTyping && (
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400">
            shibayoko@terminal
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
