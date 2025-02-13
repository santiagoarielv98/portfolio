import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
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
    <section ref={containerRef} className={cn("relative py-32", className)}>
      {/* Parallax Decorations with variant */}
      <ParallaxDecorations variant={variant} />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-6xl px-4"
      >
        {children}
      </motion.div>
    </section>
  );
}
