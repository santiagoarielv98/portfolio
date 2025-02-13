"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/types/sanity";

const Contact = ({
  section,
}: {
  section: Section & { sectionType: "contact" };
}) => (
  <section className="py-20">
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
  </section>
);

export default Contact;
