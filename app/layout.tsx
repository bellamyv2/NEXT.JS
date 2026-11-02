import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bellamy Ombaso — IT & Cybersecurity",
    template: "%s — Bellamy Ombaso",
  },
  description:
    "The portfolio of Bellamy Ombaso, an Information Technology and Cybersecurity student with experience in IT support, networking, and systems administration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
