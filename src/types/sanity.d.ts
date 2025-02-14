export type SupportedLanguage = "es" | "en";

export interface SanityImage {
  _type: "image";
  asset: {
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
      // ... otros metadatos
    };
  };
  url: string;
}

export interface Section {
  _type: "section";
  identifier: { current: string };
  title: string;
  subtitle: string;
  type: "hero" | "experience" | "projects" | "skills" | "contact" | "about";
  layout: "grid" | "list" | "timeline";
  order: number;
  content: Array<
    ProfileContent | ExperienceContent | ProjectContent | SkillCategoryContent
  >;
}

export interface TopSKill {
  title: string;
  skills: Array<{
    name: string;
    icon: {
      name: string;
      icon: string;
    };
  }>;
}

export interface Profile {
  _type: "profile";
  title: string;
  description: string;
  greeting: string;
  role: string;
  avatar: SanityImage;
  resume: SanityFile;
  contact: Contact;
  topSkills: TopSKill;
  availability: {
    status: "available" | "open" | "unavailable";
    message: string;
  };
}

export interface Social {
  platform: string;
  url: string;
  tooltip: string;
  icon: {
    name: string;
    icon: string;
  };
}

export interface Contact {
  email: ContactField;
  phone: ContactField;
  location: ContactField;
  socials: Social[];
}

export interface PortfolioQueryResult {
  profile: Profile;
  sections: Section[];
}

export interface ContactField {
  label: string;
  value: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    url: string;
  };
}

export interface ProfileContent {
  _type: "profile";
  title: string;
  description: string;
  role: string;
  avatar: SanityImage;
}

export interface ExperienceContent {
  _type: "experience";
  location: string;
  skills: Array<{
    name: string;
    icon: {
      name: string;
      icon: string;
    };
    proficiency: number;
    tooltip: string;
  }>;
  role: string;
  highlights: string;
  description: string;
  type: "work" | "education";
  organization: string;
  dateRange: {
    isCurrent: boolean;
    start: string;
    end: string;
  };
  title: string;
}

export interface ProjectContent {
  _type: "project";
  title: string;
  description: string;
  thumbnail: SanityImage;
  gallery: SanityImage[];
  skills: Array<{
    name: string;
    icon: {
      name: string;
      icon: string;
    };
    proficiency: number;
    tooltip: string;
  }>;
  links: {
    documentation: string;
    source: string;
    live: string;
  };
  featured: boolean;
}

export interface SkillCategoryContent {
  _type: "skillCategory";
  name: string;
  icon: {
    name: string;
    icon: string;
  };
  skills: Array<{
    name: string;
    icon: {
      name: string;
      icon: string;
    };
    proficiency: number;
    tooltip: string;
  }>;
}
