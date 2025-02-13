"use client";

import { Section } from "@/types/sanity";
import { Mail } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = ({
  section,
}: {
  section: Section & { sectionType: "contact" };
}) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={section.title}
        subtitle="Get in Touch"
        icon={Mail}
      />

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{section.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {section.cta && (
            <div className="text-center">
              <a
                href={section.cta.link}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {section.cta.text}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default Contact;
