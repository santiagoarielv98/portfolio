"use client";

import { BaseCard } from "@/components/base-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Profile, Section } from "@/types/sanity";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Github, Mail, MapPin, Send } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeader } from "./section-header";

const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <BaseCard>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-primary/10 p-2 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="font-display">{value}</p>
          </div>
        </div>
      </CardContent>
    </BaseCard>
  </motion.a>
);

const Contact = ({
  section,
  profile,
}: {
  section: Section;
  profile: Profile;
}) => {
  // console.log(section);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envío
  };

  return (
    <SectionContainer variant="contact">
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <BaseCard>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-display text-sm">Name</label>
                    <Input
                      placeholder="John Doe"
                      className="border-2 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display text-sm">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-2 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-display text-sm">Subject</label>
                  <Input
                    placeholder="How can I help you?"
                    className="border-2 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-sm">Message</label>
                  <Textarea
                    placeholder="Your message here..."
                    className="min-h-[150px] resize-none border-2 focus-visible:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-display"
                  size="lg"
                  variant="gradient"
                >
                  Send Message
                  <Send />
                </Button>
              </form>
            </CardContent>
          </BaseCard>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <ContactCard
              icon={Mail}
              title={profile.contact.email.label}
              value={profile.contact.email.value}
              href={`mailto:${profile.contact.email.value}`}
            />
            <ContactCard
              icon={MapPin}
              title={profile.contact.location.label}
              value={profile.contact.location.value}
              href={`https://www.google.com/maps/place/${profile.contact.location.value}`}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <Badge variant="outline">Social Media</Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {profile.contact.socials.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                // ${social.color}
                className={`flex items-center justify-center rounded-xl border-2 p-4 transition-all duration-300`}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <BaseCard>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
                </div>
                <div>
                  {/*                   Available for Work
                </h4>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new projects
 */}
                  <h4 className="font-display text-primary">
                    {profile.availability.status}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {profile.availability.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </BaseCard>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
