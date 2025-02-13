"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
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
        subtitle="Academic Journey"
        icon={GraduationCap}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="p-2 rounded-xl bg-primary/10 text-primary"
                    >
                      <Trophy className="w-6 h-6" />
                    </motion.div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <CalendarDays className="w-3 h-3" />
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
                    <CardTitle className="text-xl font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {education.degree}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
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
                    <ScrollText className="w-4 h-4 mt-1 text-primary" />
                    <p className="text-muted-foreground">
                      {education.description}
                    </p>
                  </motion.div>

                  {/* Achievements or highlights could go here */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 border-t border-border/50"
                  >
                    <div className="flex flex-wrap gap-2">
                      {["Research", "Team Projects", "Leadership"].map(
                        (achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="shadow-sm hover:shadow-md transition-all duration-300 bg-secondary/50 hover:bg-secondary/70"
                          >
                            {achievement}
                          </Badge>
                        ),
                      )}
                    </div>
                  </motion.div>
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
