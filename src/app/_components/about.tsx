"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Necesitarás instalar este componente de shadcn/ui
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/types/sanity";
import { motion } from "framer-motion"; // Necesitarás instalar framer-motion
import {
  Briefcase,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react"; // Necesitarás instalar lucide-react
import Image from "next/image";
import { TypographyH1, TypographyP } from "./typography";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const About = ({
  section,
}: {
  section: Section & { sectionType: "about" };
}) => {
  const { personalInfo } = section.content[0];

  return (
    <SectionContainer variant="default">
      <SectionHeader title={section.title} subtitle="About Me" icon={User} />

      <Card className="relative max-w-6xl mx-auto backdrop-blur-sm bg-background/80 border-2 hover:border-primary/50 transition-colors duration-500">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors duration-500" />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full aspect-square"
                    priority
                  />
                </motion.div>

                {/* Enhanced Quick Info Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent"
                >
                  <div className="flex flex-wrap gap-4 text-sm backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-display">Argentina</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="font-display">
                        {personalInfo.professionalTitle}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Social Links with Tooltips */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {[
                  {
                    icon: Github,
                    href: "#",
                    label: "GitHub",
                    color:
                      "bg-background/90 border-2 border-primary/50 text-foreground hover:bg-[#333] hover:border-[#333]",
                    description: "Check out my repositories",
                  },
                  {
                    icon: Linkedin,
                    href: "#",
                    label: "LinkedIn",
                    color:
                      "bg-background/90 border-2 border-primary/50 text-foreground hover:bg-[#0077b5] hover:border-[#0077b5]",
                    description: "Connect with me",
                  },
                  {
                    icon: Mail,
                    href: "#",
                    label: "Email",
                    color:
                      "bg-background/90 border-2 border-primary/50 text-foreground hover:bg-primary hover:border-primary",
                    description: "Get in touch",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
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
                            className={`rounded-full shadow-lg ${social.color} hover:text-white transition-all duration-300`}
                            asChild
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="h-5 w-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          sideOffset={10}
                          className="hidden md:block px-4 py-3 bg-background/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl"
                        >
                          <div className="space-y-1">
                            <p className="font-display text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {social.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {social.description}
                            </p>
                          </div>
                        </TooltipContent>
                        <TooltipContent
                          side="left"
                          sideOffset={10}
                          className="md:hidden px-4 py-3 bg-background/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl"
                        >
                          <div className="space-y-1">
                            <p className="font-display text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {social.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {social.description}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content Column with enhanced typography */}
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
                    variant="outline"
                    className="px-4 py-1 text-lg font-display border-primary/30 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                  >
                    Hello World! 👋
                  </Badge>
                </motion.div>

                <TypographyH1 className="font-display bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  {personalInfo.fullName}
                </TypographyH1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 justify-start md:justify-center"
                >
                  {personalInfo.professionalTitle
                    .split(" ")
                    .map((word, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 font-display shadow-md hover:shadow-lg transition-shadow"
                        >
                          {word}
                        </Badge>
                      </motion.div>
                    ))}
                </motion.div>
              </div>

              <Separator className="bg-primary/20" />

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <TypographyP className="text-lg leading-relaxed">
                  {personalInfo.bio}
                </TypographyP>
              </div>

              {/* Enhanced Actions */}
              <div className="flex flex-wrap gap-4 justify-start md:justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="group font-display shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                    variant="default"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="font-display shadow hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Portfolio
                  </Button>
                </motion.div>
              </div>

              {/* Skills Preview - Removed tooltips */}
              <div className="mt-8">
                <h3 className="text-sm font-display text-muted-foreground mb-3">
                  TOP SKILLS
                </h3>
                <div className="flex flex-wrap gap-2 justify-start md:justify-center">
                  {["React", "TypeScript", "Node.js", "Next.js", "UI/UX"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Badge
                          variant="outline"
                          className="font-display shadow hover:shadow-md transition-shadow"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default About;
