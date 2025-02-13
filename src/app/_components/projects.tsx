"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { CodeIcon, ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const Projects = ({
  section,
}: {
  section: Section & { sectionType: "projects" };
}) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={section.title}
        subtitle="Featured Projects"
        icon={CodeIcon}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.content.map((content, index) => {
          const { project } = content;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50 overflow-hidden">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10" />
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="flex gap-4">
                      <Button
                        size="icon"
                        variant="secondary"
                        asChild
                        className="rounded-full"
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Rocket className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        asChild
                        className="rounded-full"
                      >
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <CardHeader>
                  <CardTitle className="font-display flex items-center justify-between">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Badge
                          variant="secondary"
                          className="shadow-sm hover:shadow-md transition-all duration-300 bg-secondary/10 hover:bg-secondary/20"
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Projects;
