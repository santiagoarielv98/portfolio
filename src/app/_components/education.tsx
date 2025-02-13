"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/types/sanity";
import { TypographyH1 } from "./typography";

const Education = ({
  section,
}: {
  section: Section & { sectionType: "education" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="space-y-6">
        {section.content.map((content, index) => {
          const { education } = content;
          const startDate = new Date(education.startDate).toLocaleDateString();
          const endDate = new Date(education.endDate).toLocaleDateString();

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{education.degree}</CardTitle>
                <CardDescription>{education.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">
                  {startDate} - {endDate}
                </Badge>
                <p className="mt-4">{education.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;
