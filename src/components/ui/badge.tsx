import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/30",
        secondary:
          "border-secondary/20 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 hover:border-secondary/30",
        accent:
          "border-accent/30 bg-accent/20 text-foreground hover:bg-accent/30 hover:border-accent/40",
        outline:
          "border-primary/20 bg-background/80 text-foreground hover:border-primary/30 hover:bg-background",
        soft: "border-secondary/20 bg-secondary/10 text-foreground hover:bg-secondary/20 hover:border-secondary/30",
        gradient:
          "border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-foreground hover:from-primary/20 hover:via-secondary/20 hover:to-accent/20",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-3 text-sm",
        lg: "h-8 px-4 text-base",
      },
      shadow: {
        none: "",
        sm: "shadow-sm hover:shadow-md",
        md: "shadow-md hover:shadow-lg",
        lg: "shadow-lg hover:shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shadow: "sm",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, shadow, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, shadow }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
