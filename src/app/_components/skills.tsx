"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { useRef } from "react";
import { TypographyH1 } from "./typography";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
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
            My Toolbox 🛠️
          </Badge>
          <TypographyH1 className="font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </motion.div>

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

export default Skills;
