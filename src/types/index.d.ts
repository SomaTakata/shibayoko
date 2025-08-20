export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  };
  socials: {
    github: string;
    x_jp: string;
    x_global: string;
    zenn: string;
    linkedin: string;
  };
};

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  techStack: string[];
  link: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  skills: string[];
  achievements: string[];
  joinDate: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    zenn?: string;
    website?: string;
  };
}
