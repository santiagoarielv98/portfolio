"use client";

import { Badge } from "@/components/ui/badge";
import { TimelineCard } from "@/components/ui/timeline-card";
import { cn } from "@/lib/utils";
import type { ExperienceContent, Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, MapPin } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const experienceTypeConfig = {
  work: {
    icon: Briefcase,
    className: "from-blue-500/50 via-primary/50 to-blue-500/50",
    dotClassName: "bg-blue-500",
  },
  education: {
    icon: GraduationCap,
    className: "from-emerald-500/50 via-primary/50 to-emerald-500/50",
    dotClassName: "bg-emerald-500",
  },
  volunteer: {
    icon: Heart,
    className: "from-rose-500/50 via-primary/50 to-rose-500/50",
    dotClassName: "bg-rose-500",
  },
};

const Experience = ({ section }: { section: Section }) => {
  return (
    <SectionContainer variant="work">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
      />

      <div className="relative space-y-8">
        {/* Modern animated timeline line */}
        <div className="absolute bottom-0 left-0 top-0 ml-2 hidden w-1 sm:ml-6 sm:block md:ml-8">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full w-full bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 blur-sm"
          />
        </div>

        {section.content.map((content, index) => {
          const experience = content as ExperienceContent;
          const type = experience.type || "work";
          const {
            icon: TypeIcon,
            className,
            dotClassName,
          } = experienceTypeConfig[type as keyof typeof experienceTypeConfig];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative ml-0 sm:ml-12 md:ml-16"
            >
              {/* Animated timeline dot with type-specific color */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute -left-[1.75rem] top-8 hidden sm:-left-[3.45rem] sm:block md:-left-[4.45rem]"
              >
                <div className="relative h-5 w-5">
                  <div
                    className={cn(
                      "absolute h-full w-full animate-ping rounded-full opacity-30",
                      dotClassName,
                    )}
                  />
                  <div
                    className={cn(
                      "absolute h-full w-full rounded-full",
                      dotClassName,
                    )}
                  />
                  <div className="absolute h-2 w-2 translate-x-1.5 translate-y-1.5 rounded-full bg-white" />
                </div>
              </motion.div>

              <TimelineCard
                title={experience.role || experience.title}
                organization={experience.organization}
                dateRange={experience.dateRange}
                description={experience.description}
                skills={experience.skills}
                index={index}
                type={type}
                decorativeIcon={<TypeIcon className="h-6 w-6" />}
                meta={
                  experience.location && (
                    <Badge
                      variant="outline"
                      size="sm"
                      className={cn(
                        "font-display",
                        type === "education" && "bg-emerald-500/10",
                        type === "volunteer" && "bg-rose-500/10",
                        type === "work" && "bg-blue-500/10",
                      )}
                    >
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </Badge>
                  )
                }
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Experience;
