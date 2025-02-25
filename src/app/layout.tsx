import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "900",
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
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
