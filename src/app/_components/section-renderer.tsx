"use client";

import { Section } from "@/types/sanity";
import About from "./about";
import Education from "./education";
import { Hero } from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import WorkExperience from "./work-experience";
import Contact from "./contact";

export interface SectionRendererProps {
  section: Section;
}

const SectionRenderer = (props: SectionRendererProps) => {
  const { section } = props;

  switch (section.sectionType) {
    case "hero":
      return <Hero section={section} />;
    case "about":
      return <About section={section} />;
    case "workExperience":
      return <WorkExperience section={section} />;
    case "projects":
      return <Projects section={section} />;
    case "skills":
      return <Skills section={section} />;
    case "education":
      return <Education section={section} />;
    case "contact":
      return <Contact section={section} />;
    default:
      return null;
  }
};

export default SectionRenderer;
