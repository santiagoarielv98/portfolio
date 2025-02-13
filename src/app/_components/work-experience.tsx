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

const WorkExperience = ({
  section,
}: {
  section: Section & { sectionType: "workExperience" };
}) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto">
      <TypographyH1 className="mb-10 text-center">{section.title}</TypographyH1>
      <div className="space-y-8">
        {section.content.map((content, index) => {
          const { workExperience } = content;
          const startDate = new Date(
            workExperience.startDate,
          ).toLocaleDateString();
          const endDate = new Date(workExperience.endDate).toLocaleDateString();

          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{workExperience.position}</span>
                  <Badge variant="outline">{workExperience.location}</Badge>
                </CardTitle>
                <CardDescription>
                  {startDate} - {endDate}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {workExperience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {workExperience.technologies?.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default WorkExperience;
