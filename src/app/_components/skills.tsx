"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
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
  Frontend: <Layout className="w-6 h-6" />,
  Backend: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Mobile: <Smartphone className="w-6 h-6" />,
  DevOps: <Settings className="w-6 h-6" />,
  Web: <Globe className="w-6 h-6" />,
  Programming: <Code2 className="w-6 h-6" />,
  SEO: <Search className="w-6 h-6" />,
  "UI/UX": <Lightbulb className="w-6 h-6" />,
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
        subtitle="My Toolbox"
        icon={Lightbulb}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card className="h-full transform-gpu transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <CardTitle className="font-display flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {categoryIcons[
                        skillCategory.name as keyof typeof categoryIcons
                      ] || <Code2 className="w-6 h-6" />}
                    </motion.div>
                    <div className="space-y-1">
                      <span className="text-2xl bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                        {skillCategory.name}
                      </span>
                      <p className="text-sm text-muted-foreground font-normal">
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
                                  className="px-3 py-1.5 font-display shadow-sm hover:shadow-md transition-all duration-300 bg-secondary/20 hover:bg-secondary/30 cursor-help"
                                >
                                  {skill.name}
                                </Badge>
                              </div>
                            </TooltipTrigger>
                            {skill.level && (
                              <TooltipContent
                                className="px-4 py-3 bg-background border-2 border-primary/20 shadow-xl backdrop-blur-md"
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
                                    <span className="text-muted-foreground text-sm">
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
