"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/types/sanity";
import { motion } from "framer-motion";
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
  icon: any;
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
    <Card className="p-4 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 border-2 hover:border-primary/50">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <Icon className="w-6 h-6" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 backdrop-blur-sm bg-background/80 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border-2 hover:border-primary/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-display">Name</label>
                  <Input
                    placeholder="John Doe"
                    className="border-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-display">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-display">Subject</label>
                <Input
                  placeholder="How can I help you?"
                  className="border-2 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-display">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  className="min-h-[150px] border-2 focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-display group"
                size="lg"
              >
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                className={`p-4 flex items-center justify-center rounded-xl border-2 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
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
