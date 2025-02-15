"use client";

import { TimelineCard } from "@/components/ui/timeline-card";
import type { ExperienceContent, Section } from "@/types/sanity";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const Education = ({ section }: { section: Section }) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {section.content.map((content, index) => {
          const education = content as ExperienceContent;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineCard
                title={education.title}
                organization={education.organization}
                dateRange={education.dateRange}
                description={education.description}
                skills={education.skills}
                index={index}
                decorativeIcon={<Trophy className="h-6 w-6" />}
                className="h-full"
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Education;
