import { Section } from "@/types/sanity";
import { client } from "./client";

export const getPageContent = async (lang: string) => {
    const query = `*[_type == "section"] | order(order asc){
      "identifier": identifier.current,
      "title": title.${lang},
      "description": description.${lang},
      "sectionType": sectionType,
      "content": content[]{
        "personalInfo": *[_type == "personalInfo" && _id == ^._ref][0]{
            ...,
            "fullName": fullName.${lang},
            "professionalTitle": professionalTitle.${lang},
            "bio": bio.${lang},
            "profileImage": profileImage.asset->url,
            "resume": resume.asset->url,
        },
        "workExperience": *[_type == "workExperience" && _id == ^._ref][0]{
            ...,
            "position": position.${lang},
            "location": location.${lang},
            "description": description[].${lang},
            "technologies": technologies[]->{
                ...,
                "name": name.${lang}
            }
        },
        "project": *[_type == "project" && _id == ^._ref][0]{
            ...,
            "title": title.${lang},
            "description": description.${lang},
            "technologies": technologies[]->{
                ...,
                "name": name.${lang}
            },
            "featuredImage": featuredImage.asset->url,
            "links": links
        },
        "skillCategory": *[_type == "skillCategory" && _id == ^._ref][0]{
            ...,
            "name": name.${lang},
            "skills": *[_type == "skill" && references(^._id)]{
                ...,
                "name": name.${lang},
                "level": level
            }
        },
        "education": *[_type == "education" && _id == ^._ref][0]{
            ...,
            "degree": degree.${lang},
            "description": description.${lang}
        }
      },
      "layout": layout,
      "order": order,
      "cta": {
        "text": cta.text.${lang},
        "link": cta.link
        }
    }`;

    return client.fetch<Section[]>(query);
};