export type SectionType = 'hero' | 'about' | 'workExperience' | 'projects' | 'skills' | 'education' | 'contact' | 'custom'

export interface Section {
    order: number;
    _id: string;
    sectionType: SectionType;
    cta?: Cta;
    _createdAt: Date;
    _rev: string;
    _updatedAt: Date;
    identifier: Identifier;
    description?: LocaleString;
    title: null;
    _type: string;
    layout: string;
    content?: Content[];
}

export interface Content {
    _key: string;
    _ref: string;
    _type: string;
}

export interface LocaleString {
    en: string;
    es: string;
    _type: string;
}

export interface Identifier {
    current: string;
    _type: string;
}


export interface Hero {
    identifier: string;
    title: string;
    description: string;
    sectionType: string;
    content: null;
    layout: string;
    order: number;
    cta: Cta;
}

export interface Cta {
    text: LocaleString;
}

