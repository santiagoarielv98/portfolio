export type HeroSection = {
    sectionType: "hero";
    cta: Cta;
    description: string;
}

export type AboutSection = {
    sectionType: "about";
    content: Array<{ personalInfo: PersonalInfo }>
}

export type WorkExperienceSection = {
    sectionType: "workExperience";
    content: Array<{ workExperience: WorkExperience }>
}

export type ProjectSection = {
    sectionType: "projects";
    content: Array<{ project: Project }>
}

export type SkillCategorySection = {
    sectionType: "skills";
    content: Array<{ skillCategory: SkillCategory }>
}

export type Section = {
    identifier: string;
    title: string;
    layout: string;
    order: number;
} & (HeroSection | AboutSection | WorkExperienceSection | ProjectSection | SkillCategorySection);

export interface Content {
    _key: string;
    personalInfo: PersonalInfo | null;
    workExperience: WorkExperience | null;
    project: Project | null;
    skillCategory: SkillCategory | null;
    education: Education | null;
    _ref: string;
    _type: string;
}

export interface Education {
    startDate: Date;
    _rev: string;
    degree: string;
    _createdAt: Date;
    _id: string;
    _updatedAt: Date;
    institution: string;
    endDate: Date;
    description: string;
    _type: string;
}

export interface PersonalInfo {
    _rev: string;
    bio: string;
    _type: string;
    fullName: string;
    _id: string;
    _updatedAt: Date;
    professionalTitle: string;
    resume: string;
    _createdAt: Date;
    profileImage: string;
}

export interface Technology {
    name: string;
    level: number;
}

export interface Project {
    technologies: null | Technology[];
    _updatedAt: Date;
    title: string;
    _id: string;
    featuredImage: string;
    links: Links;
    _createdAt: Date;
    _rev: string;
    _type: string;
    description: string;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface Links {
    repo: string;
    live: string;
}

export interface SkillCategory {
    _rev: string;
    _type: string;
    name: string;
    _id: string;
    _updatedAt: Date;
    _createdAt: Date;
    skills: Skill[];
}

export interface WorkExperience {
    position: string;
    startDate: Date;
    _createdAt: Date;
    _type: string;
    company: string;
    location: string;
    _id: string;
    _updatedAt: Date;
    endDate: Date;
    _rev: string;
    description: string[];
    technologies: null | Technology[];
}

export enum Type {
    LocaleString = "localeString",
    LocaleText = "localeText",
}

export interface Cta {
    text: string;
    link: string;
}
