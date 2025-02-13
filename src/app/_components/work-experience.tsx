"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { BriefcaseIcon, Building2, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const WorkExperience = ({
  section,
}: {
  section: Section & { sectionType: "workExperience" };
}) => {
  return (
    <SectionContainer variant="work">
      <SectionHeader
        title={section.title}
        subtitle="Professional Journey"
        icon={BriefcaseIcon}
      />

      {/* Timeline */}
      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute bottom-2 left-0 top-2 ml-4 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 before:absolute before:-left-1.5 before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary/50 after:absolute after:-left-1.5 after:bottom-0 after:h-4 after:w-4 after:rounded-full after:bg-primary/50 sm:ml-6 md:ml-8" />

        {section.content.map((content, index) => {
          const { workExperience } = content;
          const startDate = new Date(workExperience.startDate);
          const endDate = new Date(workExperience.endDate);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative ml-8 sm:ml-12 md:ml-16"
            >
              {/* Timeline dot and connector */}
              <div className="absolute -left-[2.45rem] top-8 flex items-center sm:-left-[3.45rem] md:-left-[4.45rem]">
                <div className="z-10 h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                <div className="h-[2px] w-4 bg-gradient-to-r from-primary to-transparent" />
              </div>

              <Card className="relative transform-gpu border-2 bg-background/95 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
                    <div className="space-y-1">
                      <CardTitle className="gradient-text font-display text-xl md:text-2xl">
                        {workExperience.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span className="font-display">
                          {workExperience.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-2 sm:flex-col sm:text-right">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 shadow-sm"
                      >
                        <MapPin className="h-3 w-3" />
                        {workExperience.location}
                      </Badge>
                      <div className="flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
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
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="list-none space-y-3">
                    {workExperience.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50" />
                        <span className="text-muted-foreground">{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <h4 className="mb-2 font-display text-sm text-muted-foreground">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workExperience.technologies?.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary/50 font-medium text-foreground shadow-sm transition-all duration-300 hover:bg-secondary/70 hover:shadow-md"
                          >
                            {tech.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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

export default WorkExperience;
