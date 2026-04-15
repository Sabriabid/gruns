import type { Metadata } from "next";
import AtlasShell from "@/components/atlas/AtlasShell";

export const metadata: Metadata = {
  title: "Atlas — Gomu HQ",
  description: "Command center interne",
  robots: "noindex, nofollow",
};

export default function AtlasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AtlasShell>{children}</AtlasShell>;
}
