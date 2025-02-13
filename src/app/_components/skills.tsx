"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { TypographyH1 } from "./typography";

const Skills = ({
  section,
}: {
  section: Section & { sectionType: "skills" };
}) => (
  <section className="relative py-20 overflow-hidden">
    {/* Background Effect */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

    <div className="relative max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TypographyH1 className="mb-10 text-center font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                  <CardTitle className="font-display flex items-center gap-2">
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
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 font-display shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-secondary/10 hover:bg-secondary/20"
                        >
                          {skill.name}
                          {skill.level && (
                            <span className="ml-2 text-xs opacity-70">
                              {/* Mostrar nivel de habilidad como estrellas o puntos */}
                              {"●".repeat(Math.floor(skill.level / 20))}
                              {"○".repeat(5 - Math.floor(skill.level / 20))}
                            </span>
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
    </div>
  </section>
);

export default Skills;
