"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Section } from "@/types/sanity";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Twitter,
} from "lucide-react";
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
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <Card className="border-2 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/25">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-primary/10 p-2 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="font-display">{value}</p>
        </div>
      </div>
    </Card>
  </motion.a>
);

const Contact = ({
  section,
}: {
  section: Section & { sectionType: "contact" };
}) => {
  console.log(section);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envío
  };

  return (
    <SectionContainer variant="contact">
      <SectionHeader
        title="Let's Work Together"
        subtitle="Get in Touch"
        icon={MessageSquare}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
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
                className="group w-full font-display"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Card>
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
              title="Email"
              value="hello@example.com"
              href="mailto:hello@example.com"
            />
            <ContactCard
              icon={MapPin}
              title="Location"
              value="Buenos Aires, Argentina"
              href="https://maps.google.com"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <Badge
                variant="outline"
                className="bg-background px-4 text-muted-foreground"
              >
                Social Media
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com",
                color: "hover:bg-[#333333] hover:text-white",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                color: "hover:bg-[#0077b5] hover:text-white",
              },
              {
                icon: Twitter,
                href: "https://twitter.com",
                color: "hover:bg-[#1DA1F2] hover:text-white",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-xl border-2 p-4 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
              </div>
              <div>
                <h4 className="font-display text-primary">
                  Available for Work
                </h4>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new projects
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
