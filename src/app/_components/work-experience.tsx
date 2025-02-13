"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
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
        <div
          className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 ml-4 sm:ml-6 md:ml-8 
          before:absolute before:top-0 before:w-4 before:h-4 before:-left-1.5 before:rounded-full before:bg-primary/50
          after:absolute after:bottom-0 after:w-4 after:h-4 after:-left-1.5 after:rounded-full after:bg-primary/50"
        />

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
              <div className="absolute -left-[2.45rem] sm:-left-[3.45rem] md:-left-[4.45rem] top-8 flex items-center">
                <div className="w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />
                <div className="h-[2px] w-4 bg-gradient-to-r from-primary to-transparent" />
              </div>

              <Card className="relative transform-gpu transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl bg-background/95 border-2 hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl md:text-2xl font-display gradient-text">
                        {workExperience.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span className="font-display">
                          {workExperience.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-start gap-2 sm:text-right">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 shadow-sm"
                      >
                        <MapPin className="w-3 h-3" />
                        {workExperience.location}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                        <CalendarDays className="w-4 h-4" />
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
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="text-muted-foreground">{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <h4 className="text-sm font-display text-muted-foreground mb-2">
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
                            className="shadow-sm hover:shadow-md transition-all duration-300 bg-secondary/50 hover:bg-secondary/70 text-foreground font-medium"
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
