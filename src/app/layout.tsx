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
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
