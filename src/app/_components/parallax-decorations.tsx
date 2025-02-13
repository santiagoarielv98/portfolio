"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDecorationsProps {
  variant?: "default" | "skills" | "work" | "projects" | "contact";
}

export function ParallaxDecorations({
  variant = "default",
}: ParallaxDecorationsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);

  const decorations = {
    default: (
      <>
        <div className="bg-grid-pattern absolute inset-0 opacity-15" />
        <motion.div
          style={{ rotate: rotate1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </>
    ),
    skills: (
      <>
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -left-1/2 -top-1/2 h-[150%] w-[150%] rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-1/2 -right-1/2 h-[150%] w-[150%] rounded-full bg-accent/30 blur-3xl"
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </>
    ),
    work: (
      <>
        <motion.div
          style={{ y: y2, scale: 1.5 }}
          className="absolute -top-1/4 left-0 h-full w-full rounded-[100%] bg-accent/40 blur-3xl"
        />
        <motion.div
          style={{ y: y1, scale: 1.5 }}
          className="absolute -bottom-1/4 right-0 h-full w-full rounded-[100%] bg-secondary/40 blur-3xl"
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.08]" />
        <div className="bg-gradient-radial absolute inset-0 from-transparent via-background/60 to-background" />
      </>
    ),
    projects: (
      <>
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rounded-full bg-primary/35 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -bottom-1/2 -right-1/2 h-[200%] w-[200%] rounded-full bg-accent/35 blur-3xl"
          />
        </div>
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/40 to-background/80" />
      </>
    ),
    contact: (
      <>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="bg-gradient-conic absolute -left-1/2 -top-1/2 h-[200%] w-[200%] from-primary/40 via-accent/40 to-secondary/40 blur-3xl"
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.08]" />
        <div className="bg-gradient-radial absolute inset-0 from-transparent via-background/60 to-background" />
      </>
    ),
  };

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      {decorations[variant]}
    </div>
  );
}
