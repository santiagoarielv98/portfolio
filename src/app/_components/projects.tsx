"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/types/sanity";
import Image from "next/image";
import { TypographyH1 } from "./typography";

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

export default Projects;
