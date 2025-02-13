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

// Mapeo de categorías a iconos (puedes personalizarlo según tus necesidades)
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

const Skills = ({
  section,
}: {
  section: Section & { sectionType: "skills" };
}) => {
  return (
    <SectionContainer>
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
            >
              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-xl bg-primary/10 text-primary"
                    >
                      {categoryIcons[
                        skillCategory.name as keyof typeof categoryIcons
                      ] || <Code2 className="w-6 h-6" />}
                    </motion.div>
                    <span className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {skillCategory.name}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 font-display shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary/10 hover:bg-secondary/20 cursor-default"
                        >
                          {skill.name}
                          {skill.level && (
                            <div className="ml-2 flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < Math.floor(skill.level / 20)
                                      ? "bg-primary"
                                      : "bg-primary/30"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
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

export default Skills;
