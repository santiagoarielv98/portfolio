"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  GraduationCap,
  ScrollText,
  Trophy,
} from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const Education = ({
  section,
}: {
  section: Section & { sectionType: "education" };
}) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={GraduationCap}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {section.content.map((content, index) => {
          const { education } = content;
          const startDate = new Date(education.startDate);
          const endDate = new Date(education.endDate);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group border-2 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="rounded-xl bg-primary/10 p-2 text-primary"
                    >
                      <Trophy className="h-6 w-6" />
                    </motion.div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <CalendarDays className="h-3 w-3" />
                      <span>
                        {startDate.toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {endDate.toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xl text-transparent">
                      {education.degree}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-display">
                        {education.institution}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-2"
                  >
                    <ScrollText className="mt-1 h-4 w-4 text-primary" />
                    <p className="text-muted-foreground">
                      {education.description}
                    </p>
                  </motion.div>

                  {/* Achievements or highlights could go here */}
                  {education.achievements && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="border-t border-border/50 pt-4"
                    >
                      <div className="flex flex-wrap gap-2">
                        {education.achievements.map((achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-secondary/50 shadow-sm transition-all duration-300 hover:bg-secondary/70 hover:shadow-md"
                          >
                            {achievement.name}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Education;
