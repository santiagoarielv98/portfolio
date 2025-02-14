import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "kr073obv",
  dataset: "portfolio",
  apiVersion: "2024-01-01",
  useCdn: false,
});
