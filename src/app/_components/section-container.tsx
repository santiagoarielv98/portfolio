import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className,
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

      <motion.div
        style={{ opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {children}

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
}
