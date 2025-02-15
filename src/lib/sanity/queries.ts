import type { PortfolioQueryResult, SupportedLanguage } from "@/types/sanity";
import { sanityClient } from "./client";

const localizedField = (field: string, lang: SupportedLanguage) =>
  `${field}.${lang}`;

export const createPortfolioQuery = (lang: SupportedLanguage = "es") => `{
  "profile": *[_type == "profile"][0] {
    _type,
    "title": ${localizedField("title", lang)},
    "description": ${localizedField("description", lang)},
    "greeting": ${localizedField("greeting", lang)},
    topSkills {
      "title": ${localizedField("title", lang)},
      skills[]-> {
        "name": ${localizedField("name", lang)},
        "icon": icon->icon,
        proficiency,
        "tooltip": ${localizedField("tooltip", lang)}
      }
    },
    "role": ${localizedField("role", lang)},
    "avatar": avatar.asset->,
    "resume": resume.asset->,
    contact {
      email {
        "label": ${localizedField("label", lang)},
        value
      },
      phone {
        "label": ${localizedField("label", lang)},
        value
      },
      location {
        "label": ${localizedField("label", lang)},
        "value": ${localizedField("value", lang)}
      },
      socials[]->{
        platform,
        url,
        "tooltip": ${localizedField("tooltip", lang)},
        icon->
      }
    },
    "availability": *[_type == "availabilityStatus" && _id == ^.availability._ref][0] {
      status,
      "message": ${localizedField("message", lang)}
    }
  },
  "sections": *[_type == "section"] | order(order asc) {
    _type,
    identifier,
    "title": ${localizedField("title", lang)},
    "subtitle": ${localizedField("subtitle", lang)},
    type,
    layout,
    order,
    actions[]-> {
      action,
      "label": ${localizedField("label", lang)},
      icon->
    },
    "icon": icon->icon,
    "content": content[]-> {
      _type,
      _id,
      ...select(
        _type == "profile" => {
          "title": ${localizedField("title", lang)},
          "description": ${localizedField("description", lang)},
          "role": ${localizedField("role", lang)},
          "avatar": avatar.asset->,
          contact
        },
        _type == "about" => {
          "title": ${localizedField("title", lang)},
          "subtitle": ${localizedField("subtitle", lang)},
        },
        _type == "experience" => {
          "title": ${localizedField("title", lang)},
          "description": ${localizedField("description", lang)},
          organization,
          "role": ${localizedField("role", lang)},
          type,
          dateRange,
          "highlights": highlights[]{"text": ${localizedField("text", lang)}},
          "location": ${localizedField("location", lang)},
          "skills": skills[]-> {
            "name": ${localizedField("name", lang)},
            icon,
            proficiency,
            "tooltip": ${localizedField("tooltip", lang)}
          }
        },
        _type == "education" => {
          "title": ${localizedField("title", lang)},
          "description": ${localizedField("description", lang)},
          institution,
          degree,
          dateRange,
          "location": ${localizedField("location", lang)},
          "skills": skills[]-> {
            "name": ${localizedField("name", lang)},
            icon,
            proficiency,
            "tooltip": ${localizedField("tooltip", lang)}
          }
        },
        _type == "project" => {
          "title": ${localizedField("title", lang)},
          "description": ${localizedField("description", lang)},
          "thumbnail": thumbnail.asset->,
          "gallery": gallery[].asset->,
          "skills": skills[]-> {
            "name": ${localizedField("name", lang)},
            icon,
            proficiency,
            "tooltip": ${localizedField("tooltip", lang)}
          },
          links,
          featured
        },
        _type == "skillCategory" => {
          "name": ${localizedField("name", lang)},
          icon,
          "skills": skills[]-> {
            "name": ${localizedField("name", lang)},
            icon,
            proficiency,
            "tooltip": ${localizedField("tooltip", lang)}
          }
        }
      )
    }
  }
}`;

export const createSectionQuery = (lang: SupportedLanguage = "es") => `
  *[_type == "section" && identifier.current == $identifier][0] {
    _type,
    identifier,
    "title": ${localizedField("title", lang)},
    "subtitle": ${localizedField("subtitle", lang)},
    type,
    layout,
    order,
    "content": content[]-> {
      _type,
      _id,
    }
  }
`;

export interface LocalizedQueryResult<T> {
  value: string;
  language: SupportedLanguage;
  raw: T;
}

export const getPortfolio = async (
  lang: SupportedLanguage = "es",
): Promise<LocalizedQueryResult<PortfolioQueryResult>> => {
  const query = createPortfolioQuery(lang);
  const result = await sanityClient.fetch(query);
  return { value: result, language: lang, raw: result };
};
