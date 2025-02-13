"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { motion, useScroll, useTransform } from "framer-motion";
import { CodeIcon, ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { TypographyH1 } from "./typography";

const Projects = ({
  section,
}: {
  section: Section & { sectionType: "projects" };
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1 text-lg font-display mb-4 shadow-lg hover:shadow-xl transition-all"
          >
            <CodeIcon className="w-4 h-4 mr-2" />
            Featured Projects
          </Badge>
          <TypographyH1 className="font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </motion.div>

        {/* Projects Grid */}
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

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            easings: ["easeInOut"],
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            easings: ["easeInOut"],
          }}
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Projects;
