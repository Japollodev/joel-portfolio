import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Italiana } from "next/font/google";
import { hero, site } from "@/content";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italiana",
});

const plexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: hero.portrait.src,
        width: hero.portrait.width,
        height: hero.portrait.height,
        alt: hero.portrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [hero.portrait.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${italiana.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
