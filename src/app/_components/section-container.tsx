import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { ParallaxDecorations } from "./parallax-decorations";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "skills" | "work" | "projects" | "contact";
}

export function SectionContainer({
  children,
  className,
  variant = "default",
}: SectionContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={containerRef}
      className={cn("relative py-32 overflow-hidden", className)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Parallax Decorations with variant */}
      <ParallaxDecorations variant={variant} />

      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
}
