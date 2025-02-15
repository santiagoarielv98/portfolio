import type { Locale } from "@/config/i18n-config";
import { i18n } from "@/config/i18n-config";
import { getPortfolio } from "@/lib/sanity/queries";
import About from "../_components/about";
import Contact from "../_components/contact";
import Experience from "../_components/experience";
import { Hero } from "../_components/hero";
import Projects from "../_components/projects";
import Skills from "../_components/skills";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const HomePage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  const data = await getPortfolio(lang);

  const components = data.raw.sections.map((section) => {
    switch (section.type) {
      case "hero":
        return <Hero key={section.identifier.current} section={section} />;
      case "about":
        return (
          <About
            key={section.identifier.current}
            section={section}
            profile={data.raw.profile}
          />
        );
      case "experience":
        return (
          <Experience key={section.identifier.current} section={section} />
        );
      case "projects":
        return <Projects key={section.identifier.current} section={section} />;
      case "skills":
        return <Skills key={section.identifier.current} section={section} />;
      case "contact":
        return (
          <Contact
            key={section.identifier.current}
            section={section}
            profile={data.raw.profile}
          />
        );
      default:
        return null;
    }
  });

  return <main className="relative">{components}</main>;
};

export default HomePage;
