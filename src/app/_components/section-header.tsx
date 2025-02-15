import { getIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
      <Badge variant="gradient" size="lg" shadow="lg" className="font-display">
        <Icon className="h-4 w-4" />
        {subtitle}
      </Badge>
      <div className="relative mx-auto flex items-center justify-center gap-4">
        <Separator className="flex-1 bg-gradient-to-r from-transparent to-primary/30" />
        <TypographyH1 className="gradient-text relative max-w-fit flex-1 font-display font-bold md:min-w-fit">
          {title}
        </TypographyH1>
        <Separator className="flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>
    </motion.div>
  );
}
