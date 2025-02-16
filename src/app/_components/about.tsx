"use client";

import { BaseCard } from "@/components/base-card";
import { getIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Profile, Section, Social, TopSKill } from "@/types/sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";
import { TypographyH1, TypographyP } from "./typography";

// Types

// Profile Image Component
const ProfileImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      {/* <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-2xl transition-colors duration-500 group-hover:bg-primary/30" /> */}
      {/* <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-secondary/20 blur-2xl transition-colors duration-500 group-hover:bg-secondary/30" /> */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 mt-auto h-1/3 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="aspect-square w-full rounded-2xl object-cover"
          priority
        />
      </motion.div>
    </div>
  </motion.div>
);

export interface SocialLinksProps {
  socials: Social[];
}

// Social Links Component
const ListSocial = ({ socials }: SocialLinksProps) => (
  <div className="absolute -right-5 top-1/2 flex -translate-y-1/2 flex-col gap-4">
    {socials.map((social, index) => (
      <SocialButton key={social.platform} social={social} index={index} />
    ))}
  </div>
);

// Social Button Component
const SocialButton = ({ social, index }: { social: Social; index: number }) => {
  const Icon = getIcon(social.icon);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
    >
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              // ${social.color}
              className={`rounded-full shadow-lg transition-all duration-300 hover:text-white`}
              asChild
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <SocialTooltipContent {...social} />
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

// Tooltip Content Component
const SocialTooltipContent = ({ platform, tooltip }: Partial<Social>) => (
  <>
    <TooltipContent
      side="right"
      sideOffset={10}
      className="hidden border-2 border-primary/20 bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm md:block"
    >
      <TooltipInner label={platform} description={tooltip} />
    </TooltipContent>
    <TooltipContent
      side="left"
      sideOffset={10}
      className="border-2 border-primary/20 bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm md:hidden"
    >
      <TooltipInner label={platform} description={tooltip} />
    </TooltipContent>
  </>
);

// Tooltip Inner Content
const TooltipInner = ({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) => (
  <div className="space-y-1">
    <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-sm font-bold text-transparent">
      {label}
    </p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

// Skills Section Component
export interface SkillsSectionProps {
  topSkill: TopSKill;
}
const SkillsSection = ({ topSkill }: SkillsSectionProps) => (
  <div className="mt-8">
    <h3 className="mb-3 font-display text-sm text-muted-foreground">
      {topSkill.title}
    </h3>
    <div className="flex flex-wrap justify-start gap-2 md:justify-center">
      {topSkill.skills?.map((skill, index) => {
        const Icon = getIcon(skill.icon);
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
          >
            <Badge
              variant="soft"
              size="md"
              shadow="sm"
              className="font-display"
            >
              <Icon className="h-4 w-4" />
              {skill.name}
            </Badge>
          </motion.div>
        );
      })}
    </div>
  </div>
);

// Main About Component
const About = ({
  section,
  profile,
}: {
  section: Section;
  profile: Profile;
}) => {
  return (
    <SectionContainer variant="default">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle!}
        icon={section.icon}
      />
      <BaseCard>
        <CardContent className="overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <ProfileImage src={profile.avatar.url} alt={profile.title} />
              <ListSocial socials={profile.contact.socials} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 text-left md:text-center"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <Badge
                    variant="gradient"
                    size="lg"
                    shadow="lg"
                    className="font-display"
                  >
                    {profile.greeting}
                  </Badge>
                </motion.div>

                <TypographyH1 className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text font-display text-transparent">
                  {profile.title}
                </TypographyH1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-start gap-2 md:justify-center"
                >
                  {
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="accent"
                        size="lg"
                        shadow="md"
                        className="font-display"
                      >
                        {profile.role}
                      </Badge>
                    </motion.div>
                  }
                </motion.div>
              </div>

              <Separator />

              <div>
                <TypographyP className="text-lg leading-relaxed">
                  {profile.description}
                </TypographyP>
              </div>

              <div className="flex flex-wrap justify-start gap-4 md:justify-center">
                {section.actions?.map((cta, index) => {
                  const Icon = getIcon(cta.icon);
                  return (
                    <motion.div
                      key={cta.action}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Button
                        className="font-display"
                        variant="gradient"
                        size="lg"
                      >
                        <Icon className="h-6 w-6" />
                        {cta.label}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              <SkillsSection topSkill={profile.topSkills} />
            </motion.div>
          </div>
        </CardContent>
      </BaseCard>
    </SectionContainer>
  );
};

export default About;
