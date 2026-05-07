import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hantavir.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Hantavirus Outbreak Tracker 2026 | MV Hondius, Andes Virus, Symptoms, Prevention",
    template: "%s | Hantavirus Watch",
  },
  description:
    "Current, source-led hantavirus outbreak tracker for the 2026 MV Hondius Andes virus cluster, with WHO status, CDC prevention guidance, symptoms, timelines, and media updates.",
  applicationName: "Hantavirus Watch",
  keywords: [
    "hantavirus outbreak tracker",
    "hantavirus 2026",
    "MV Hondius hantavirus",
    "Andes virus",
    "hantavirus symptoms",
    "hantavirus prevention",
    "hantavirus pulmonary syndrome",
    "CDC hantavirus",
    "WHO hantavirus",
  ],
  authors: [{ name: "Hantavirus Watch editorial desk" }],
  creator: "Hantavirus Watch",
  publisher: "Hantavirus Watch",
  category: "Public health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hantavirus Watch",
    title:
      "Hantavirus Outbreak Tracker 2026 | Current MV Hondius Andes Virus Status",
    description:
      "A clean public-health dashboard for confirmed facts, symptoms, prevention, and source links on the 2026 hantavirus cluster linked to MV Hondius.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hantavirus Watch dashboard preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hantavirus Outbreak Tracker 2026",
    description:
      "WHO status, CDC prevention guidance, symptoms, and sourced updates for the MV Hondius Andes virus cluster.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f8fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
