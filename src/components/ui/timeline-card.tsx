"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge } from "./badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Building2, CalendarDays } from "lucide-react";

interface TimelineCardProps {
  title: string;
  organization: string;
  dateRange: {
    start: string;
    end: string;
  };
  description: string;
  skills?: Array<{ name: string; icon?: string }>;
  className?: string;
  index?: number;
  decorativeIcon?: React.ReactNode;
  meta?: React.ReactNode;
  type?: "work" | "education" | "volunteer";
}

export function TimelineCard({
  title,
  organization,
  dateRange,
  description,
  skills,
  className,
  index = 0,
  decorativeIcon,
  meta,
  type = "work",
}: TimelineCardProps) {
  const startDate = new Date(dateRange.start);
  const endDate = new Date(dateRange.end);

  const typeStyles = {
    work: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    education: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    volunteer: "hover:border-rose-500/50 hover:shadow-rose-500/20",
  };

  return (
    <Card
      className={cn(
        // Base styles
        "group relative overflow-hidden border-2 bg-background/95",
        // Modern glass effect - removed backdrop-blur
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent",
        // Responsive transforms and shadows
        "transform-gpu transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:scale-[1.01]",
        // Type-specific styles
        typeStyles[type],
        className,
      )}
    >
      <CardHeader className="relative space-y-4">
        {/* Header Grid Layout - Improved grid template */}
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
          {/* Icon Container - Fixed sizing */}
          {decorativeIcon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-2 ring-1 ring-primary/20"
            >
              <div className="relative z-10 flex h-full items-center justify-center text-primary">
                {decorativeIcon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          )}

          {/* Title and Organization - Improved text wrapping */}
          <div className="min-w-0 space-y-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <CardTitle className="break-words bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xl text-transparent sm:text-2xl">
                {title}
              </CardTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Building2 className="h-4 w-4 shrink-0" />
              <span className="truncate font-display text-sm sm:text-base">
                {organization}
              </span>
            </motion.div>
          </div>

          {/* Meta Information - Fixed alignment */}
          <div className="flex shrink-0 flex-row items-start gap-2 sm:flex-col sm:items-end">
            {meta}
            <Badge variant="outline" size="sm" className="whitespace-nowrap">
              <CalendarDays className="h-3 w-3 shrink-0" />
              <span className="hidden sm:inline">
                {startDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
                {" - "}
                {endDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="sm:hidden">
                {startDate.getFullYear()} - {endDate.getFullYear()}
              </span>
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-balance text-muted-foreground"
        >
          {description}
        </motion.p>
      </CardContent>

      {skills && (
        <CardFooter className="flex-wrap gap-2 border-t border-border/50 pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: 0.7 + idx * 0.1,
                  bounce: 0.3,
                }}
              >
                <Badge
                  variant="soft"
                  size="md"
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 font-medium transition-colors hover:from-primary/20 hover:to-secondary/20"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardFooter>
      )}
    </Card>
  );
}
