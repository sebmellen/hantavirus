import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hantavirus Watch",
    short_name: "Hantavirus",
    description:
      "Source-led hantavirus outbreak tracker with symptoms, prevention, and official public-health updates.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fb",
    theme_color: "#0b5e8e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
