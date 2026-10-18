import type { MetadataRoute } from "next";
import { site } from "@/site.config";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/politica-de-privacidade", "/termos-de-uso"].map((p) => ({ url: `${site.url}${p}` }));
}
