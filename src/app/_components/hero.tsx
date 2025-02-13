"use client";

import { Section } from "@/types/sanity";
import { TypographyH1, TypographyH2 } from "./typography";
import { Parallax } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, ScrollText } from "lucide-react";

export function Hero({
  section,
}: {
  section: Section & { sectionType: "hero" };
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      {/* Parallax Background Elements */}
      <Parallax
        translateY={[-20, 20]}
        className="absolute top-20 left-10 w-72 h-72"
      >
        <div className="bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      </Parallax>

      <Parallax
        translateY={[20, -20]}
        className="absolute top-40 right-10 w-72 h-72"
      >
        <div className="bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </Parallax>

      <Parallax
        translateY={[-30, 30]}
        className="absolute -bottom-8 left-20 w-72 h-72"
      >
        <div className="bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <Parallax translateY={[-20, 20]} className="space-y-4">
          <TypographyH1 className="animate-fade-in-up bg-gradient-to-r from-foreground to-primary/50 bg-clip-text text-transparent">
            {section.title}
          </TypographyH1>
        </Parallax>

        <Parallax translateY={[20, -20]} opacity={[0.5, 1]}>
          <TypographyH2 className="animate-fade-in-up animation-delay-300 font-light leading-relaxed max-w-2xl mx-auto">
            {section.description}
          </TypographyH2>
        </Parallax>

        {section.cta && (
          <>
            {/* Nuevo divisor */}
            <div className="w-full max-w-2xl mx-auto py-6">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="animate-fade-in-up animation-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  {section.cta.text}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ScrollText className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                View Resume
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
