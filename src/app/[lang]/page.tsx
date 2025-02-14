import type { Locale } from "@/config/i18n-config";
import { i18n } from "@/config/i18n-config";
import { getPortfolio } from "@/lib/sanity/queries";
import { Hero } from "../_components/hero";
import About from "../_components/about";
import WorkExperience from "../_components/work-experience";
import Projects from "../_components/projects";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const HomePage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  const data = await getPortfolio(lang);
  // console.log(data);

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
          <WorkExperience key={section.identifier.current} section={section} />
        );
      case "projects":
        console.log(section);
        return <Projects key={section.identifier.current} section={section} />;
      default:
        return null;
    }
  });

  return <main className="relative">{components}</main>;
};

export default HomePage;
