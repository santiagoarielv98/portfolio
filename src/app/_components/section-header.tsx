import { getIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TypographyH1 } from "./typography";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  icon,
  className,
}: SectionHeaderProps) {
  const Icon = getIcon(icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-16 text-center", className)}
    >
      <Badge
        variant="outline"
        className="glassmorphism mb-4 border-primary/20 px-4 py-1 font-display text-lg text-foreground shadow-lg transition-all hover:shadow-xl"
      >
        <Icon className="mr-2 h-4 w-4" />
        {subtitle}
      </Badge>
      <div className="relative flex items-center justify-center gap-4">
        <div className="h-[2px] w-[50px] bg-gradient-to-r from-transparent to-primary/30 md:w-[200px]" />
        <TypographyH1 className="gradient-text relative font-display font-bold">
          {title}
        </TypographyH1>
        <div className="h-[2px] w-[50px] bg-gradient-to-r from-primary/30 to-transparent md:w-[200px]" />
      </div>
    </motion.div>
  );
}
