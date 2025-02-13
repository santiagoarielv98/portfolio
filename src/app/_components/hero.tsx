"use client";

import { Section } from "@/types/sanity";
import { TypographyH1, TypographyH2 } from "./typography";
import { Parallax } from "react-scroll-parallax";

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
          <div className="animate-fade-in-up animation-delay-500 pt-8">
            <a
              href={section.cta.link}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-primary transition-all hover:bg-primary/90"
            >
              <span className="relative text-md font-semibold text-primary-foreground">
                {section.cta.text}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>
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
