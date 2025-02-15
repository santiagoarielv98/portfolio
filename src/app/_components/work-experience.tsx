"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExperienceContent, Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const WorkExperience = ({ section }: { section: Section }) => {
  return (
    <SectionContainer variant="work">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
      />

      {/* Timeline */}
      <div className="relative space-y-8 sm:space-y-12">
        {/* Timeline line */}
        <div className="absolute bottom-2 left-0 top-2 ml-2 hidden w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 before:absolute before:-left-1 before:top-0 before:h-3 before:w-3 before:rounded-full before:bg-primary/50 after:absolute after:-left-1 after:bottom-0 after:h-3 after:w-3 after:rounded-full after:bg-primary/50 sm:ml-6 sm:block md:ml-8" />

        {section.content.map((content, index) => {
          const workExperience = content as ExperienceContent;
          const startDate = new Date(workExperience.dateRange.start);
          const endDate = new Date(workExperience.dateRange.end);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative ml-0 sm:ml-12 md:ml-16"
            >
              {/* Timeline dot and connector */}
              <div className="absolute -left-[1.75rem] top-8 hidden items-center sm:-left-[3.45rem] sm:flex md:-left-[4.45rem]">
                <div className="z-10 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50 sm:h-5 sm:w-5" />
                <div className="h-[2px] w-3 bg-gradient-to-r from-primary to-transparent sm:w-4" />
              </div>

              <Card className="relative transform-gpu border-2 bg-background/95 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                    <div className="space-y-1">
                      <CardTitle className="gradient-text font-display text-xl md:text-2xl">
                        {workExperience.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span className="font-display">
                          {workExperience.organization}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-start gap-2 sm:flex-col sm:text-right">
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
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-muted-foreground">
                        {workExperience.description}
                      </span>
                    </motion.li>
                  </ul>

                  <div className="pt-4">
                    {/* TRADUCIR */}
                    {/* <h4 className="mb-2 font-display text-sm text-muted-foreground">
                      Technologies & Tools
                    </h4> */}
                    <div className="flex flex-wrap gap-2">
                      {workExperience.skills?.map((tech, idx) => (
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
