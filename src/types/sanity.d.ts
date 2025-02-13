export type HeroSection = {
    sectionType: "hero";
    content: null;
    cta: Cta;
    description: string;
}

export type Section = {
    identifier: string;
    title: string;
    layout: string;
    order: number;
} & HeroSection;

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

export interface Project {
    technologies: null;
    _updatedAt: Date;
    title: string;
    _id: string;
    featuredImage: FeaturedImage;
    links: Links;
    _createdAt: Date;
    _rev: string;
    _type: string;
    description: string;
}

export interface FeaturedImage {
    _type: string;
    asset: Asset;
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
    description: Text[];
    technologies: null;
}

export enum Type {
    LocaleString = "localeString",
    LocaleText = "localeText",
}

export interface Cta {
    text: string;
    link: string;
}
