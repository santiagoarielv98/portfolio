"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const baseCardVariants = cva(
  // Base styles
  "relative border-2 bg-background/80 backdrop-blur-sm transition-all duration-500",
  {
    variants: {
      variant: {
        default:
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20",
        gradient: cn(
          "before:absolute before:inset-0 before:-translate-x-full",
          "before:animate-[shimmer_2s_infinite]",
          "before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent",
        ),
        interactive: cn(
          "transform-gpu",
          "hover:-translate-y-1 hover:scale-[1.01]",
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/25",
        ),
        skill: cn(
          "transform-gpu",
          "hover:-translate-y-1 hover:scale-[1.02]",
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30",
        ),
        project:
          "overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/25",
      },

      glass: {
        true: "bg-background/95 backdrop-blur-md",
        false: "bg-background/80 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      glass: false,
    },
  },
);

export interface BaseCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof baseCardVariants> {}

const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, variant, glass, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(baseCardVariants({ variant, glass }), className)}
        {...props}
      />
    );
  },
);
BaseCard.displayName = "BaseCard";

export { BaseCard, baseCardVariants };
