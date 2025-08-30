import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { TanstackQueryProvider } from "@/components/tanstack-query";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import Script from 'next/script';
import { config } from "./config";

const poppins = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "800",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${config.name} | Singer, Songwriter, Instrumentalist & Performer`,
  description:
    "A dynamic vocalist who ignites through vulnerability, Samantha Dress emphasizes a playful commitment to total authenticity, anchored in serious musicianship.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Samantha Dress",
    images: [
      {
        url: "https://samanthadress.com/hero.png",
        width: 1800,
        height: 1600,
        alt: "Samantha Dress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: "https://samanthadress.com/hero.png",
      alt: "Samantha Dress",
    },
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": config.name,
    "alternateName": config.name,
    "jobTitle": config.jobDescription.replaceAll("•", ","),
    "url": "https://samanthadress.com/",
    "sameAs": [
      config.facebook,
      config.instagram,
      config.spotify,
      config.appleMusic,
    ],
    "image": "https://samanthadress.com/hero.png",
    "description": config.jobDescription.replaceAll("•", ","),
    "genre": config.genres
  }
  return (
    <Script
      id="ld-json"
      type="application/ld+json"
      strategy="afterInteractive"
      key="structured-data"
    >
      {JSON.stringify(data)}
    </Script>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <JsonLd />
      </head>
      <body className={`${poppins.variable} antialiased bg-black text-white`}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
