import type { Metadata } from "next";
import { Fredoka, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import WaitlistModal from "@/components/v2/WaitlistModal";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gomu — Un sachet chaque matin. Toute ta nutrition couverte.",
  description:
    "15 à 20 vitamines et minéraux à dosages cliniques, en formes biodisponibles. Base pectine halal et vegan. Tests Eurofins publiés pour chaque lot. 29€/mois, annulable en 2 clics.",
  openGraph: {
    title: "Gomu — Un sachet chaque matin. Toute ta nutrition couverte.",
    description:
      "15 à 20 vitamines et minéraux à dosages cliniques. Formes biodisponibles. Base pectine halal et vegan. Tests Eurofins publiés lot par lot.",
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
    <html
      lang="fr"
      className={`${fredoka.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <WaitlistModal />
      </body>
    </html>
  );
}
