import { Section } from "@/types/sanity";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

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

export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function Hero({
  section,
}: {
  section: Section & { sectionType: "hero" };
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      {/* Animated Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-muted-foreground tracking-wider animate-fade-in-down">
            Welcome to my portfolio
          </h2>
          <TypographyH1 className="animate-fade-in-up bg-gradient-to-r from-foreground to-primary/50 bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </div>

        <TypographyH2 className="animate-fade-in-up animation-delay-300 font-light leading-relaxed max-w-2xl mx-auto">
          {section.description}
        </TypographyH2>

        {section.cta && (
          <div className="animate-fade-in-up animation-delay-500 pt-8">
            <a
              href={section.cta.link}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
            >
              <span className="relative text-md font-semibold text-primary-foreground">
                {section.cta.text}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

const About = ({
  section,
}: {
  section: Section & { sectionType: "about" };
}) => {
  const { personalInfo } = section.content[0];

  return (
    <section className="py-20">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="space-y-6">
            <div>
              <TypographyH1>{personalInfo.fullName}</TypographyH1>
              <Badge variant="secondary" className="mt-2">
                {personalInfo.professionalTitle}
              </Badge>
            </div>
            <Separator />
            <TypographyP>{personalInfo.bio}</TypographyP>
          </div>
          <div className="relative">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

const WorkExperience = ({
  section,
}: {
  section: Section & { sectionType: "workExperience" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="space-y-8">
        {section.content.map((content, index) => {
          const { workExperience } = content;
          const startDate = new Date(
            workExperience.startDate,
          ).toLocaleDateString();
          const endDate = new Date(workExperience.endDate).toLocaleDateString();

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{workExperience.position}</span>
                  <Badge variant="outline">{workExperience.location}</Badge>
                </CardTitle>
                <CardDescription>
                  {startDate} - {endDate}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {workExperience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {workExperience.technologies?.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

const Projects = ({
  section,
}: {
  section: Section & { sectionType: "projects" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.content.map((content, index) => {
          const { project } = content;
          return (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <a
                  href={project.links.live}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Live Demo
                </a>
                <a
                  href={project.links.repo}
                  className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium bg-background hover:bg-accent"
                >
                  Repository
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

const Skills = ({
  section,
}: {
  section: Section & { sectionType: "skills" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.content.map((content, index) => {
          const { skillCategory } = content;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{skillCategory.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, idx) => (
                    <Badge key={idx}>{skill.name}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

const Education = ({
  section,
}: {
  section: Section & { sectionType: "education" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="space-y-6">
        {section.content.map((content, index) => {
          const { education } = content;
          const startDate = new Date(education.startDate).toLocaleDateString();
          const endDate = new Date(education.endDate).toLocaleDateString();

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{education.degree}</CardTitle>
                <CardDescription>{education.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">
                  {startDate} - {endDate}
                </Badge>
                <p className="mt-4">{education.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

const Contact = ({
  section,
}: {
  section: Section & { sectionType: "contact" };
}) => (
  <section className="py-20">
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{section.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {section.cta && (
          <div className="text-center">
            <a
              href={section.cta.link}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {section.cta.text}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  </section>
);
