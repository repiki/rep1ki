import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "REPIKI — создание сайтов", short_name: "REPIKI", description: "Дизайн и разработка сайтов.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#ffffff" }; }
