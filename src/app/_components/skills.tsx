"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Lightbulb,
  Search,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const categoryIcons = {
  Frontend: <Layout className="h-6 w-6" />,
  Backend: <Server className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Mobile: <Smartphone className="h-6 w-6" />,
  DevOps: <Settings className="h-6 w-6" />,
  Web: <Globe className="h-6 w-6" />,
  Programming: <Code2 className="h-6 w-6" />,
  SEO: <Search className="h-6 w-6" />,
  "UI/UX": <Lightbulb className="h-6 w-6" />,
};

const categoryDescriptions = {
  Frontend: "Building responsive and interactive user interfaces",
  Backend: "Server-side development and API architecture",
  Database: "Data modeling and database management",
  Mobile: "Cross-platform mobile app development",
  DevOps: "CI/CD, deployment, and infrastructure",
  Web: "Modern web development and optimization",
  Programming: "Core programming and software design",
  SEO: "Search engine optimization and analytics",
  "UI/UX": "User interface and experience design",
};

const getLevelText = (level: number) => {
  const levels = {
    90: "Expert",
    70: "Advanced",
    50: "Intermediate",
    30: "Basic",
    0: "Beginner",
  };

  const levelKey =
    Object.keys(levels)
      .map(Number)
      .find((key) => level >= key) || 0;

  return {
    text: levels[levelKey as keyof typeof levels],
    color:
      level >= 90
        ? "text-primary"
        : level >= 70
          ? "text-secondary"
          : "text-accent",
  };
};

const Skills = ({
  section,
}: {
  section: Section & { sectionType: "skills" };
}) => {
  return (
    <SectionContainer variant="skills">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={Lightbulb}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {section.content.map((content, index) => {
          const { skillCategory } = content;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full transform-gpu border-2 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30">
                <CardHeader className="space-y-4">
                  <CardTitle className="flex items-center gap-3 font-display">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl bg-primary/10 p-2.5 text-primary transition-colors duration-300 group-hover:bg-primary/20"
                    >
                      {categoryIcons[
                        skillCategory.name as keyof typeof categoryIcons
                      ] || <Code2 className="h-6 w-6" />}
                    </motion.div>
                    <div className="space-y-1">
                      <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-2xl text-transparent">
                        {skillCategory.name}
                      </span>
                      <p className="text-sm font-normal text-muted-foreground">
                        {
                          categoryDescriptions[
                            skillCategory.name as keyof typeof categoryDescriptions
                          ]
                        }
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <TooltipProvider>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                              <div>
                                <Badge
                                  variant="secondary"
                                  className="cursor-help bg-secondary/20 px-3 py-1.5 font-display shadow-sm transition-all duration-300 hover:bg-secondary/30 hover:shadow-md"
                                >
                                  {skill.name}
                                </Badge>
                              </div>
                            </TooltipTrigger>
                            {skill.level && (
                              <TooltipContent
                                className="border-2 border-primary/20 bg-background px-4 py-3 shadow-xl backdrop-blur-md"
                                sideOffset={5}
                              >
                                <div className="space-y-2">
                                  <p className="font-display text-sm text-foreground">
                                    Proficiency Level
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`font-bold ${getLevelText(skill.level).color}`}
                                    >
                                      {getLevelText(skill.level).text}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      ({skill.level}%)
                                    </span>
                                  </div>
                                </div>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
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

export default Skills;
