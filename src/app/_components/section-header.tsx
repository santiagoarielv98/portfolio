import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { TypographyH1 } from "./typography";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-16", className)}
    >
      <Badge
        variant="outline"
        className="px-4 py-1 text-lg font-display mb-4 shadow-lg hover:shadow-xl transition-all glassmorphism border-primary/20 text-foreground"
      >
        <Icon className="w-4 h-4 mr-2" />
        {subtitle}
      </Badge>
      <div className="relative flex items-center justify-center gap-4">
        <div className="w-[200px] bg-gradient-to-r from-transparent to-primary/30 h-[2px]" />
        <TypographyH1 className="relative font-display font-bold gradient-text">
          {title}
        </TypographyH1>
        <div className="w-[200px] bg-gradient-to-r from-primary/30 to-transparent h-[2px]" />
      </div>
    </motion.div>
  );
}
