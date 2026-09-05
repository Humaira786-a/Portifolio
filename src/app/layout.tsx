import type { Metadata } from "next";
import { MobileMenu } from "@/components/layout/MobileMenu";
import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Humaira Ahmadi | Frontend Developer",
    template: "%s | Humaira Ahmadi",
  },
  description:
    "Portfolio of Humaira Ahmadi — a frontend developer building modern, responsive and interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
>
  <Navbar />
  <MobileMenu />

  <div className="pl-0 pt-20 md:pt-0 md:pl-20">
    {children}
  </div>
</body>
    </html>
  );
}