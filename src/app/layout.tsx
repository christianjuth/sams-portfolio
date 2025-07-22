import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "800",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Samantha Dress",
  description: "singer • songwriter • instrumentalist • performer • producer • music educator",
  openGraph: {
    type: "website",
    siteName: "Samantha Dress",
    images: [
      {
        url: 'https://samanthadress.com/hero.png',
        width: 1800,
        height: 1600,
        alt: 'Samantha Dress',
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: {
      url: 'https://samanthadress.com/hero.png',
      alt: 'Samantha Dress',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
