"use client";

import { BaseCard } from "@/components/base-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectContent, Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const Projects = ({ section }: { section: Section }) => {
  return (
    <SectionContainer variant="projects">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {section.content.map((content, index) => {
          const project = content as ProjectContent;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BaseCard className="overflow-hidden">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 overflow-hidden"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                  <Image
                    src={project.thumbnail.url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <Button
                        size="icon"
                        variant="gradient"
                        asChild
                        className="rounded-full"
                      >
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Rocket />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="gradient"
                        asChild
                        className="rounded-full"
                      >
                        <Link
                          href={project.links.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-display">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <Link href={project.links.live} passHref target="_blank">
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills?.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Badge
                          variant="soft"
                          size="md"
                          shadow="sm"
                          className="font-medium"
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </BaseCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Projects;
