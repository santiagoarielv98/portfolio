"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { motion, useScroll, useTransform } from "framer-motion";
import { BriefcaseIcon, Building2, CalendarDays, MapPin } from "lucide-react";
import { useRef } from "react";
import { TypographyH1 } from "./typography";

const WorkExperience = ({
  section,
}: {
  section: Section & { sectionType: "workExperience" };
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* Header */}
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
            <BriefcaseIcon className="w-4 h-4 mr-2" />
            Professional Journey
          </Badge>
          <TypographyH1 className="font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 ml-8 md:ml-[7.5rem]" />

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
              >
                <Card className="relative ml-12 md:ml-32 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50">
                  {/* Timeline dot */}
                  <div className="absolute -left-[44px] md:-left-[120px] top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-4 items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl md:text-2xl font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {workExperience.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span className="font-display">
                            {workExperience.company}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 shadow-sm"
                        >
                          <MapPin className="w-3 h-3" />
                          {workExperience.location}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
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
                              className="shadow-sm hover:shadow-md transition-all duration-300 bg-secondary/10 hover:bg-secondary/20"
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

export default WorkExperience;
