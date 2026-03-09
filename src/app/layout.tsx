import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Groms - Nutrition Complète en Gommes",
  description:
    "Plus de 60 ingrédients essentiels dans une gomme délicieuse. Rejoignez la liste d'attente et soyez parmi les premiers à découvrir Groms.",
  openGraph: {
    title: "Groms - Nutrition Complète en Gommes",
    description:
      "Plus de 60 ingrédients essentiels dans une gomme délicieuse.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
