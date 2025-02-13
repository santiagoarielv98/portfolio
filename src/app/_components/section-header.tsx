import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { TypographyH1 } from "./typography";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  id?: string;
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="section-title-wrapper"
    >
      <Badge variant="outline" className="badge-base">
        <Icon className="w-4 h-4 mr-2" />
        {subtitle}
      </Badge>
      <TypographyH1 className="font-display gradient-text [text-wrap:balance]">
        {title}
      </TypographyH1>
    </motion.div>
  );
}
