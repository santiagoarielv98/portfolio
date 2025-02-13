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
        className="px-4 py-1 text-lg font-display mb-4 shadow-lg hover:shadow-xl transition-all"
      >
        <Icon className="w-4 h-4 mr-2" />
        {subtitle}
      </Badge>
      <TypographyH1 className="font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </TypographyH1>
    </motion.div>
  );
}
