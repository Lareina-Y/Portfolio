import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lareina Yang — Software Engineer",
  description:
    "Portfolio of Lareina Yang, a software engineer building thoughtful full-stack and AI products.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lareina Yang — Software Engineer",
    description: "Engineering ideas into impact.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Lareina Yang portfolio",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
