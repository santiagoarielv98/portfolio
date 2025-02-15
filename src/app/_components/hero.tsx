"use client";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Section } from "@/types/sanity";
import { ChevronDown } from "lucide-react";
import { Parallax } from "react-scroll-parallax";
import { TypographyH1, TypographyH2 } from "./typography";
import { Separator } from "@/components/ui/separator";

export function Hero({ section }: { section: Section }) {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      <Parallax
        translateY={[-20, 20]}
        className="absolute left-10 top-20 h-72 w-72"
      >
        <div className="size-full animate-blob rounded-full bg-primary/10 mix-blend-multiply blur-xl filter" />
      </Parallax>

      <Parallax
        translateY={[20, -20]}
        className="absolute right-10 top-40 h-72 w-72"
      >
        <div className="animation-delay-2000 size-full animate-blob rounded-full bg-secondary/10 mix-blend-multiply blur-xl filter" />
      </Parallax>

      <Parallax
        translateY={[-30, 40]}
        className="absolute -bottom-8 left-20 h-72 w-72"
      >
        <div className="animation-delay-4000 size-full animate-blob rounded-full bg-accent/10 mix-blend-multiply blur-xl filter" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
        <Parallax translateY={[-20, 20]} className="space-y-4">
          <TypographyH1 className="animate-fade-in-up bg-gradient-to-r from-foreground to-primary/50 bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </Parallax>

        <Parallax translateY={[20, -20]} opacity={[0.5, 1]}>
          <TypographyH2 className="animation-delay-300 mx-auto max-w-2xl animate-fade-in-up font-light leading-relaxed">
            {section.subtitle}
          </TypographyH2>
        </Parallax>

        <Separator />

        <div className="animation-delay-500 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row">
          {section.actions?.map((cta, index) => {
            const Icon = getIcon(cta.icon.icon);

            return (
              <Button
                key={index}
                size="lg"
                variant="gradient"
                className="font-display"
              >
                <Icon className="h-6 w-6" />
                {cta.label}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}
